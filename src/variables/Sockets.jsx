import { socket, connect } from "variables/Variables.jsx";

class Socket {
  constructor () {
    // this.websocket = new WebSocket("ws://" + window.location.host + "/ws");
    this.websocket = socket;

    this.varMap = {};

    this.listUpdated = true;
    this.sendMessage = this.sendMessage.bind(this)
    this.addVariable = this.addVariable.bind(this)
    this.varReceived = this.varReceived.bind(this)
  }

  // Send message to server
  sendMessage(name, value) {  
    this.websocket.send(
      JSON.stringify({
        variable: name,
        value: value
      }
    ));
  }

  // Pass to ChannelForm so that it can modify the channels array in the parent class
  addVariable(name, value) {
    // Check if variable is already included
    if (typeof this.varMap[name] !== 'undefined') {
      // Check if value for variable has changed
      if (this.varMap[name].value != value) {
        this.varMap[name].value = value;
        this.listUpdated = true;
        return;
      } 
      else {
        this.listUpdated = false;
        return; 
      }
    }
    // Else, add new variable and update list
    this.varMap[name] = {value: value};
    this.listUpdated = true;
  }

  // Variable receieved from server, add to list, update it's value, or ignore
  varReceived(evt, panel) { 
    // Parse message
    this.msg = JSON.parse(evt.data);

    var keys = Object.keys(this.msg)
    var msgLength = keys.length
            
    // Switch on type of message and message length
    switch(true) {
      // If actually an array of 2 variables
      case (msgLength == 2 && typeof this.msg.variable === 'undefined'):
        for(var values in this.msg){
            this.addVariable(this.msg[values].variable, this.msg[values].value);
        }
        break;
      // If single variable (name and value)
      case (msgLength == 2):
        this.addVariable(this.msg.variable, this.msg.value);
        break;
      // If multiple message passed (Map of variables)
      case (msgLength > 2 && this.msg[keys[msgLength-1]].value == panel):
        // Iterate over every variable
        for(var values in this.msg){
          this.addVariable(this.msg[values].variable, this.msg[values].value);
        }
        break;
      default:
          break;       
    }
  }  
}

export default Socket;