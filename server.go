// Daniel Delago 
// daniel.b.delago@nasa.gov
// Backend server for NExSyS Web Based Simulation Monitoring Tool frontend 
package main

import (
	"bufio"
	"net"
	"strconv"
	"strings"
	"net/http"
	"github.com/gorilla/websocket"
	"log"
	"./Parsers"
	"sync"
	"os"
)

// Global Variables
var (
	// Connected clients
	clients = make(map[*websocket.Conn]net.Conn)
	// Broadcast channel
	broadcast = make(chan Message)
	// Configure the upgrader
	upgrader = websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
        	return true
    	},
    }
    // List of DCAPP Trick Variables
    trickVarsAll = Parsers.ParseTrickXML("src/variables/trick/vars_displayed.xml")
	// Get all Trick Variables in formatted list form
 	trickVarList = Parsers.GetTrickVarLists(trickVarsAll)
	// Map of all variables to their values
	trickVarsInitial = make(map[int]Message)
	// Mutex lock
	mutex = sync.RWMutex{}
	// Increasing variable id for trickVarsInitial
	id = 1
)

// Define our message object
type Message struct {
	Variable 	string `json:"variable"`
	Value 		string `json:"value"`
}

// Add new variable to keep track of
func addTrickVar(msg Message) {
	trickVarsInitial[id] = Message{msg.Variable, msg.Value}
	id++
}

// Send command to Trick server
func sendTrickCommand(command string, conn net.Conn ) {
	conn.Write([]byte(command))
}

// Send message to client
func sendMessage(msg Message, client *websocket.Conn) {
	err := client.WriteJSON(msg)
	if err != nil {
		log.Printf("error: %v", err)
		client.Close()
		delete(clients, client)
	}
}

// Handle sockets and receive incoming messages from clients
func handleConnections(w http.ResponseWriter, r *http.Request) {

	log.Printf("New client")

	// Upgrade initial GET request to a websocket
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err, ws)
	}

	// Make sure we close the connection when the function returns
	defer ws.Close()

	// ip and port for initial trick server
	// ip   := "192.70.126.237"
	ip := "139.169.203.141"
	port := 17000
	addr := strings.Join([]string{ip, strconv.Itoa(port)}, ":")
	var connTrick net.Conn

	// A map of trick variables SPECIFIC to this client
	trickVars := make(map[int]Message)

	// Assign intial values to trickVars
	for key, value := range trickVarsInitial {
 		trickVars[key] = value
	}

	// Channel for signalling when to end a Goroutuine
	goSignal := make(chan string)  

	// Create goroutine to prevent blocking on Trick server connection attempt
	go func() {
		connTrick, err = net.Dial("tcp", addr)
		if err != nil {
			log.Printf("Can't connect to Trick server.")
			log.Printf("%v", err)

		} else {
			log.Printf("Connected to Trick server.")
			// Register our new client 
			clients[ws] = connTrick
			
			// Begin Trick Server Goroutine
			go getTrickVars(ip, port, ws, trickVars, goSignal)
		}
	}()

	// Active Panel being viewed by client
	activePanel := ""

	// Infinite loop that continously waits for a new message to be written to the WebSocket
	for {
		// Read in a new message as JSON and map it to a Message object
		var msg Message
		err := ws.ReadJSON(&msg)
		if err != nil {
			log.Printf("error: %v", err)
			delete(clients, ws)
			break
		}

		// Switch on message recieved
		switch {
			// Active Panel has changed
			case msg.Variable == "activePanel" :
				// Get new active panel value 
				activePanel = msg.Value

				// New map to send to client of updated values on the current panel being viewed
				panelMap := make(map[int]Message)

				// Switch on active panel
				switch {
					// Dashboard Active
					case activePanel == "dashboard":
						panelMap[0] = Message{"trickServer", addr}
						panelMap[1] = Message{"panel", "dashboard"}
					// MPCV Active
					case activePanel == "mpcv":
						var_id := 1
						for var_id <= len(trickVarList[0]){
							mutex.RLock()
							panelMap[var_id] = trickVars[var_id]
							mutex.RUnlock()
							var_id++
						}
						panelMap[var_id] = Message{"panel", "mpcv"}
					// PM Active
					case activePanel == "pm":
						var_id := len(trickVarList[0]) + 1
						for var_id <= len(trickVarList[0]) + len(trickVarList[1]){
							mutex.RLock()
							panelMap[var_id] = trickVars[var_id]
							mutex.RUnlock()
							var_id++
						}
						panelMap[var_id] = Message{"panel", "pm"}
					// Robo Active
					case activePanel == "robo":
						var_id := len(trickVarList[0]) + len(trickVarList[1]) + 1
						for var_id <= len(trickVarList[0]) + len(trickVarList[1]) + len(trickVarList[2]){
							mutex.RLock()
							panelMap[var_id] = trickVars[var_id]
							mutex.RUnlock()
							var_id++
						}
						panelMap[var_id] = Message{"panel", "robo"}
					// SubSys Active
					case activePanel == "subsys":
						var_id := len(trickVarList[0]) + len(trickVarList[1]) + len(trickVarList[2]) 
						for var_id <= len(trickVarList[0]) + len(trickVarList[1]) + len(trickVarList[2]) + len(trickVarList[3]){
							mutex.RLock()
							panelMap[var_id] = trickVars[var_id]
							// log.Printf("%v %v\n", panelMap[var_id], var_id)
							mutex.RUnlock()
							var_id++
						}
						panelMap[var_id] = Message{"panel", "subsys"}
					// Cam Active
					case activePanel == "cams":
						var_id := len(trickVarList[0]) + len(trickVarList[1]) + len(trickVarList[2]) + len(trickVarList[3]) + 1
						for var_id <= len(trickVarList[0]) + len(trickVarList[1]) + len(trickVarList[2]) + len(trickVarList[3]) + len(trickVarList[4]){
							mutex.RLock()
							panelMap[var_id] = trickVars[var_id]
							mutex.RUnlock()
							var_id++
						}
						panelMap[var_id] = Message{"panel", "cams"}
					// RoverLLT Active
					case activePanel == "rover_llt":
						var_id := len(trickVarList[0]) + len(trickVarList[1]) + len(trickVarList[2]) + len(trickVarList[3]) + len(trickVarList[4]) + 1
						for var_id <= len(trickVarList[0]) + len(trickVarList[1]) + len(trickVarList[2]) + len(trickVarList[3]) + len(trickVarList[4]) + len(trickVarList[5]){
							mutex.RLock()
							panelMap[var_id] = trickVars[var_id]
							mutex.RUnlock()
							var_id++
						}
						panelMap[var_id] = Message{"panel", "rover_llt"}
					default:
						panelMap[0] = Message{"Error, invalid response", ""}
				}

				// Send out map of variables to the client
				err = ws.WriteJSON(panelMap)
				if err != nil {
					log.Printf("error: %v", err)
					ws.Close()
					delete(clients, ws)
				}
			// The client has requested to connect to a new Trick server
			case msg.Variable == "trickServer":
				log.Printf("Stopping connection to Trick server: %v, connecting to: %v", addr, msg.Value)
				// Prevent blocking
				select {
					case goSignal <- "stop":
					default:
				}

				// Create map to send to client
				panelMap := make(map[int]Message)

				// Save old address if new address is invalid
				oldAddr := addr
				addr = msg.Value

				// Attempt to connect to new Trick server
				connTrick, err = net.Dial("tcp", addr)
				if err != nil {
					log.Printf("Can't connect to Trick server.")
					panelMap[0] = Message{"error", "invalid_trick_server"}
					panelMap[1] = Message{"panel", "dashboard"}
					
					addr = oldAddr
					
					err = ws.WriteJSON(panelMap)
					if err != nil {
						log.Printf("error: %v", err)
						ws.Close()
						delete(clients, ws)
					}
				    break;
				}

				// If connected successfully to new Trick server, update client and start new Goroutine
				clients[ws] = connTrick
				go getTrickVars(ip, port, ws, trickVars, goSignal)
		}
	}

	connTrick.Close()
}

// Get Trick variable values from server
func getTrickVars(ip string, port int, ws *websocket.Conn, trickVars map[int]Message, goSignal <-chan string) {

	// Write to server, pause and send messages using ASCII encoding 
	sendTrickCommand("trick.var_pause()\n", clients[ws])
	sendTrickCommand("trick.var_ascii()\n", clients[ws])

	// Variables to retrieve from Trick
	for var_id := 1; var_id < len(trickVars) + 1; var_id++  {
		sendTrickCommand("trick.var_add(\"" + trickVars[var_id].Variable + "\") \n", clients[ws])
	}

	// Begin sending data
	sendTrickCommand("trick.var_unpause()\n", clients[ws])

	// Input buffer
	reader := bufio.NewReader(clients[ws])
	
	msg := ""
		
	// Infinite loop over incoming data from Trick server
	for {
		// check if Goroutine was signalled to stop
		select {
		    case msg = <-goSignal:
		    default:
	    }
	    if msg == "stop" {
	        log.Printf("Stopping goroutine")
	        clients[ws].Close()
			break
		}

		// Get all incoming values from Trick
		reply, err := reader.ReadBytes('\n')
		if err != nil {
			log.Printf("Connection with Trick server lost.")
		    break;
		}

		// Split on whitespace only up to the number of received input variables, values begin on index 1
		data := strings.Fields(string(reply))
		// log.Printf("\nDATA %v %v\n", data, len(trickVars))

		// For every variable, update values
		for var_id := 1 ; var_id < len(data); var_id++ {
			// Workaround to update a GoLang map struct value
			mutex.RLock()
			trickVarCurrent := trickVars[var_id].Value
			mutex.RUnlock()
			if trickVarCurrent != data[var_id] {
				mutex.RLock()
				var temp = trickVars[var_id] 
				mutex.RUnlock()

				temp.Value = data[var_id]
				
				mutex.Lock()
				trickVars[var_id] = temp
				mutex.Unlock()
			}
		} 
	}
}

func main() {
	// Create a simple file server, THIS IS WHERE GO IMPLEMENTS FRONTEND IF npm run build WAS USED
	fs := http.FileServer(http.Dir("build"))
	http.Handle("/", fs)

	// Initialize Trick Variables
	// MPCV
	for i := range trickVarList[0] { addTrickVar(Message{trickVarList[0][i], "0"}) }
	// PM
	for i := range trickVarList[1] { addTrickVar(Message{trickVarList[1][i], "0"}) }
	// Robo
	for i := range trickVarList[2] { addTrickVar(Message{trickVarList[2][i], "0"}) }
	// SubSys
	for i := range trickVarList[3] { addTrickVar(Message{trickVarList[3][i], "0"}) }
	// Cam
	for i := range trickVarList[4] { addTrickVar(Message{trickVarList[4][i], "0"}) }
	// RoverLLT
	for i := range trickVarList[5] { addTrickVar(Message{trickVarList[5][i], "0"}) }

	// Configure websocket route
	http.HandleFunc("/ws", handleConnections)
	
	// Start the server on localhost port 3000 and log any errors
	// log.Println("http server started on 139.169.203.141:3000")
	// err2 := http.ListenAndServe("139.169.203.141:3000", nil)
	log.Println("http server started on", os.Args[1])
	err2 := http.ListenAndServe(os.Args[1], nil)
	if err2 != nil {
		log.Fatal("ListenAndServe: ", err2)
	}
}