// Daniel Delago 
// daniel.b.delago@nasa.gov
// Go XML Parser for S_sie.resource files
package Parsers

import (
	"encoding/xml"
	"fmt"	
	"io/ioutil"
)

type TrickVariable struct {
		Name 	string 	`xml:"Name,attr"`
	}	

type PDU struct {
	Mbsu01Switch 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Mbsu01Switch"`
	Mbsu02Switch 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Mbsu02Switch"`
	Rpc01 			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Rpc01"`
	Rpc02 			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Rpc02"`
	Rpc03 			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Rpc03"`
	Rpc04 			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Rpc04"`
	Rpc05 			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Rpc05"`
	Rpc06 			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Rpc06"`
	Rpc07 			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Rpc07"`
	Rpc08 			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Rpc08"`
	Housekeeping 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Housekeeping"`
}

type MBSU struct {
	SarSwitch 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"SarSwitch"`
	BatSwitch 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"BatSwitch"`
	AuxSwitch 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"AuxSwitch"`
	Out1Switch 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Out1Switch"`
	Out2Switch 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Out2Switch"`
	Out3Switch 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Out3Switch"`
	Out4Switch 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Out4Switch"`
	Housekeeping 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Housekeeping"`
}

type PowerSuppply struct {
	Battery 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Bat"`
	Solar 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Sol"`
	SolarReg 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Sar"`
	BatSwitch 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"BatSwitch"`
	SolSwitch 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"SolSwitch"`
}

type Amps struct {
	Ps01 		PowerSuppply	`xml:"Ps01"`
	Ps02 		PowerSuppply	`xml:"Ps02"`
	Mbsu01 		MBSU			`xml:"Mbsu01"`
	Mbsu02 		MBSU			`xml:"Mbsu02"`
	Pdu01 		PDU				`xml:"Pdu01"`
	Pdu02 		PDU				`xml:"Pdu02"`
	Pdu03 		PDU				`xml:"Pdu03"`
	Pdu04 		PDU				`xml:"Pdu04"`
	MagicPower 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"MagicPower"`
}

type HalSubSystem struct {
	SystemAlarm 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"SystemAlarm"`
	HalAmps			Amps 	`xml:"HalAmps"`
	SubsOverview	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"SubsOverview"`
	PotableWater 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"PotableWater"`
	// PotableWater_Pump struct {Variables []TrickVariable 	`xml:"TrickVariable"`} `xml:"PotableWater>PumpPackage"`
	WasteWater 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"WasteWater"`
	// WasteWater_Pump struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"WasteWater>PumpPackage"`
	TCS				struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"TCS"`
	ARS				struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"ARS"`
	// ARS_CabinInfo	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"ARS>CabinInfo"`
	ARS_RCA			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"ARS_RCA"`
	Pcs				struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Pcs"`
}

type HabSubSystem struct {
	SystemAlarm struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"SystemAlarm"`
	HabAmps		Amps 	`xml:"HabAmps"`
	Water 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Water"`
	Itcs		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Itcs"`
	EtcsA		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"EtcsA"`
	EtcsB		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"EtcsB"`
	HabCal		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"HabCal"`
	EamArs		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"EamArs"`
	Pcs			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Pcs"`
}

type CameraPage struct {
	Telescope 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Telescope"`
	MmsevAercam struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"MmsevAercam"`
}	

type SubSysPage struct {
	HalAirlock 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"HalAirlock"`
	HabAirlock 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"HabAirlock"`
	MpcvArs 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"MpcvArs"`
	MpcvPcs 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"MpcvPcs"`
	Hab 		HabSubSystem	`xml:"Hab"`
	Hal 		HalSubSystem	`xml:"Hal"`
	Crew 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Crew"`
}

type RoboticPage struct {
	Mmsev 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"mmsev"`
	Nexsys 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"nexsys"`
	Arm 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"arm"`
	NextStep 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"nextstep"`
	Door 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Door"`
} 

type PmGncPage struct {
	GNC 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"PmGNC"`
	States 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"PmStates"`
	GNC_simct 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"PmGNC_simct_interface"`
	HC 			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"PmHC"`
} 

type MpcvGncPage struct {
	GNC 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"MpcvGNC"`
	Hware 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"MpcvHware"`
	States 		struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"MpcvStates"`
	GNC_simct 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"MpcvGNC_simct_interface"`
	HC 			struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"MpcvHC"`
	AutoControl 	TrickVariable 	`xml:"TrickVariable"`
} 

type RoverLltPage struct {
	Rover 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"Rover"`
	LLT 	struct {Variables 	[]TrickVariable 	`xml:"TrickVariable"`} `xml:"LLT"`
}


type TrickVars struct {
	XMLName 	xml.Name 		`xml:"FromTrick"`
	MPCV		MpcvGncPage 	`xml:"MpcvGncPageActive"`
	PM			PmGncPage 		`xml:"PmGncPageActive"`
	ROBO		RoboticPage 	`xml:"RoboticPageActive"`
	SUBSYS		SubSysPage		`xml:"SubsystemPageActive"`
	CAM 		CameraPage		`xml:"CameraPageActive"`
	ROVER_LLT	RoverLltPage	`xml:"RoverAndLLTActive"`
}

func ParseTrickXML(varPath string) TrickVars{

	v := TrickVars{}

	// dat, err := ioutil.ReadFile("src/variables/trick/vars_displayed.xml")
	dat, err := ioutil.ReadFile(varPath)
	if err != nil {
        panic(err)
	}
	
	err2 := xml.Unmarshal([]byte(dat), &v)
	if err2 != nil {
		fmt.Printf("error: %v", err2)
		return TrickVars{}
	}

	return v
}

func GetTrickVarLists(v TrickVars) [][]string {

	// List of the top level DCAPP panels
	varList := make([][]string, 6)
	varList[0] = make([]string, 0)
	varList[1] = make([]string, 0)
	varList[2] = make([]string, 0)
	varList[3] = make([]string, 0)
	varList[4] = make([]string, 0)
	varList[5] = make([]string, 0)

	// MPCV Variables
	for trick_var := range v.MPCV.GNC.Variables { varList[0] = append(varList[0], v.MPCV.GNC.Variables[trick_var].Name) }	
	for trick_var := range v.MPCV.Hware.Variables { varList[0] = append(varList[0], v.MPCV.Hware.Variables[trick_var].Name) }	
	for trick_var := range v.MPCV.States.Variables { varList[0] = append(varList[0], v.MPCV.States.Variables[trick_var].Name) }	
	for trick_var := range v.MPCV.GNC_simct.Variables { varList[0] = append(varList[0], v.MPCV.GNC_simct.Variables[trick_var].Name) }
	for trick_var := range v.MPCV.HC.Variables { varList[0] = append(varList[0], v.MPCV.HC.Variables[trick_var].Name) }
	varList[0] = append(varList[0], v.MPCV.AutoControl.Name)

	// PM Variables
	for trick_var := range v.PM.GNC.Variables { varList[1] = append(varList[1], v.PM.GNC.Variables[trick_var].Name) }	
	for trick_var := range v.PM.States.Variables { varList[1] = append(varList[1], v.PM.States.Variables[trick_var].Name) }	
	for trick_var := range v.PM.GNC_simct.Variables { varList[1] = append(varList[1], v.PM.GNC_simct.Variables[trick_var].Name) }
	for trick_var := range v.PM.HC.Variables { varList[1] = append(varList[1], v.PM.HC.Variables[trick_var].Name) }

	// ROBO Variables
	// for trick_var := range v.ROBO.Mmsev.Variables { varList[2] = append(varList[2], v.ROBO.Mmsev.Variables[trick_var].Name) }	
	// for trick_var := range v.ROBO.Nexsys.Variables { varList[2] = append(varList[2], v.ROBO.Nexsys.Variables[trick_var].Name) }	
	// for trick_var := range v.ROBO.Arm.Variables { varList[2] = append(varList[2], v.ROBO.Arm.Variables[trick_var].Name) }
	for trick_var := range v.ROBO.NextStep.Variables { varList[2] = append(varList[2], v.ROBO.NextStep.Variables[trick_var].Name) }
	for trick_var := range v.ROBO.Door.Variables { varList[2] = append(varList[2], v.ROBO.Door.Variables[trick_var].Name) }

	// SUBSYS Variables
	for trick_var := range v.SUBSYS.HalAirlock.Variables { varList[3] = append(varList[3], v.SUBSYS.HalAirlock.Variables[trick_var].Name) }	
	for trick_var := range v.SUBSYS.HabAirlock.Variables { varList[3] = append(varList[3], v.SUBSYS.HabAirlock.Variables[trick_var].Name) }	
	for trick_var := range v.SUBSYS.MpcvArs.Variables { varList[3] = append(varList[3], v.SUBSYS.MpcvArs.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.MpcvPcs.Variables { varList[3] = append(varList[3], v.SUBSYS.MpcvPcs.Variables[trick_var].Name) }
	
	// Hab 
	for trick_var := range v.SUBSYS.Hab.SystemAlarm.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.SystemAlarm.Variables[trick_var].Name) }
	// ---Amps
	//    ---Ps01
	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps01.Battery.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Ps01.Battery.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps01.Solar.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Ps01.Solar.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps01.SolarReg.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Ps01.SolarReg.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps01.BatSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Ps01.BatSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps01.SolSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Ps01.SolSwitch.Variables[trick_var].Name) }

	//    ---ps02
	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps02.Battery.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Ps02.Battery.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps02.Solar.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Ps02.Solar.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps02.SolarReg.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Ps02.SolarReg.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps02.BatSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Ps02.BatSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps02.SolSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Ps02.SolSwitch.Variables[trick_var].Name) }

	//    ---Mbsu01
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.SarSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu01.SarSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.BatSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu01.BatSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.AuxSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu01.AuxSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.Out1Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu01.Out1Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.Out2Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu01.Out2Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.Out3Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu01.Out3Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.Out4Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu01.Out4Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu01.Housekeeping.Variables[trick_var].Name) }

	//    ---Mbsu02
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.SarSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu02.SarSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.BatSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu02.BatSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.AuxSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu02.AuxSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.Out1Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu02.Out1Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.Out2Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu02.Out2Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.Out3Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu02.Out3Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.Out4Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu02.Out4Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Mbsu02.Housekeeping.Variables[trick_var].Name) }

	//    ---Pdu01
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Mbsu01Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Mbsu01Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Mbsu02Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Mbsu02Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc01.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Rpc01.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc02.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Rpc02.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc03.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Rpc03.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc04.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Rpc04.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc05.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Rpc05.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc06.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Rpc06.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc07.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Rpc07.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc08.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Rpc08.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu01.Housekeeping.Variables[trick_var].Name) }

	//    ---Pdu02
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Mbsu01Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Mbsu01Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Mbsu02Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Mbsu02Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc01.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Rpc01.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc02.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Rpc02.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc03.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Rpc03.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc04.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Rpc04.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc05.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Rpc05.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc06.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Rpc06.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc07.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Rpc07.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc08.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Rpc08.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu02.Housekeeping.Variables[trick_var].Name) }

	//    ---Pdu03
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Mbsu01Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Mbsu01Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Mbsu02Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Mbsu02Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc01.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Rpc01.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc02.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Rpc02.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc03.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Rpc03.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc04.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Rpc04.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc05.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Rpc05.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc06.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Rpc06.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc07.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Rpc07.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc08.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Rpc08.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu03.Housekeeping.Variables[trick_var].Name) }

	//    ---Pdu04
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Mbsu01Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Mbsu01Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Mbsu02Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Mbsu02Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc01.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Rpc01.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc02.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Rpc02.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc03.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Rpc03.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc04.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Rpc04.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc05.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Rpc05.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc06.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Rpc06.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc07.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Rpc07.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc08.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Rpc08.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.Pdu04.Housekeeping.Variables[trick_var].Name) }

	for trick_var := range v.SUBSYS.Hab.HabAmps.MagicPower.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabAmps.MagicPower.Variables[trick_var].Name) }

	for trick_var := range v.SUBSYS.Hab.Water.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.Water.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.Itcs.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.Itcs.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.EtcsA.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.EtcsA.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.EtcsB.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.EtcsB.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.HabCal.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.HabCal.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.EamArs.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.EamArs.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hab.Pcs.Variables { varList[3] = append(varList[3], v.SUBSYS.Hab.Pcs.Variables[trick_var].Name) }

	// fmt.Printf( "---Hal\n") 
	for trick_var := range v.SUBSYS.Hal.SystemAlarm.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.SystemAlarm.Variables[trick_var].Name) }
	// fmt.Printf( "   ---Amps\n") 
	// fmt.Printf( "      ---Ps01\n")
	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps01.Battery.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Ps01.Battery.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps01.Solar.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Ps01.Solar.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps01.SolarReg.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Ps01.SolarReg.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps01.BatSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Ps01.BatSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps01.SolSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Ps01.SolSwitch.Variables[trick_var].Name) }

	// fmt.Printf( "      ---Ps02\n")
	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps02.Battery.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Ps02.Battery.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps02.Solar.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Ps02.Solar.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps02.SolarReg.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Ps02.SolarReg.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps02.BatSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Ps02.BatSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps02.SolSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Ps02.SolSwitch.Variables[trick_var].Name) }

	// fmt.Printf( "      ---Mbsu01\n")
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.SarSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu01.SarSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.BatSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu01.BatSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.AuxSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu01.AuxSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.Out1Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu01.Out1Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.Out2Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu01.Out2Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.Out3Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu01.Out3Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.Out4Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu01.Out4Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu01.Housekeeping.Variables[trick_var].Name) }

	// fmt.Printf( "      ---Mbsu02\n")
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.SarSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu02.SarSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.BatSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu02.BatSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.AuxSwitch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu02.AuxSwitch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.Out1Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu02.Out1Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.Out2Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu02.Out2Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.Out3Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu02.Out3Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.Out4Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu02.Out4Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Mbsu02.Housekeeping.Variables[trick_var].Name) }

	// fmt.Printf( "      ---Pdu01\n")
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Mbsu01Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Mbsu01Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Mbsu02Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Mbsu02Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc01.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Rpc01.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc02.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Rpc02.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc03.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Rpc03.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc04.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Rpc04.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc05.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Rpc05.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc06.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Rpc06.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc07.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Rpc07.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc08.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Rpc08.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu01.Housekeeping.Variables[trick_var].Name) }

	// fmt.Printf( "      ---Pdu02\n")
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Mbsu01Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Mbsu01Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Mbsu02Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Mbsu02Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc01.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Rpc01.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc02.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Rpc02.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc03.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Rpc03.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc04.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Rpc04.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc05.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Rpc05.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc06.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Rpc06.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc07.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Rpc07.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc08.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Rpc08.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu02.Housekeeping.Variables[trick_var].Name) }

	// fmt.Printf( "      ---Pdu03\n")
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Mbsu01Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Mbsu01Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Mbsu02Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Mbsu02Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc01.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Rpc01.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc02.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Rpc02.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc03.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Rpc03.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc04.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Rpc04.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc05.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Rpc05.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc06.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Rpc06.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc07.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Rpc07.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc08.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Rpc08.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu03.Housekeeping.Variables[trick_var].Name) }

	// fmt.Printf( "      ---Pdu04\n")
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Mbsu01Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Mbsu01Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Mbsu02Switch.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Mbsu02Switch.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc01.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Rpc01.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc02.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Rpc02.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc03.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Rpc03.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc04.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Rpc04.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc05.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Rpc05.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc06.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Rpc06.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc07.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Rpc07.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc08.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Rpc08.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Housekeeping.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.Pdu04.Housekeeping.Variables[trick_var].Name) }

	for trick_var := range v.SUBSYS.Hal.HalAmps.MagicPower.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.HalAmps.MagicPower.Variables[trick_var].Name) }

	for trick_var := range v.SUBSYS.Hal.SubsOverview.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.SubsOverview.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.PotableWater.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.PotableWater.Variables[trick_var].Name) }
	// for trick_var := range v.SUBSYS.Hal.PotableWater_Pump.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.PotableWater_Pump.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.WasteWater.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.WasteWater.Variables[trick_var].Name) }
	// for trick_var := range v.SUBSYS.Hal.WasteWater_Pump.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.WasteWater_Pump.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.TCS.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.TCS.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.ARS.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.ARS.Variables[trick_var].Name) }
	// for trick_var := range v.SUBSYS.Hal.ARS_CabinInfo.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.ARS_CabinInfo.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.ARS_RCA.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.ARS_RCA.Variables[trick_var].Name) }
	for trick_var := range v.SUBSYS.Hal.Pcs.Variables { varList[3] = append(varList[3], v.SUBSYS.Hal.Pcs.Variables[trick_var].Name) }

	for trick_var := range v.SUBSYS.Crew.Variables { varList[3] = append(varList[3], v.SUBSYS.Crew.Variables[trick_var].Name) }	

	// fmt.Printf("\n\nCamera Variables:\n")
	for trick_var := range v.CAM.Telescope.Variables { varList[4] = append(varList[4], v.CAM.Telescope.Variables[trick_var].Name) }	
	for trick_var := range v.CAM.MmsevAercam.Variables { varList[4] = append(varList[4], v.CAM.MmsevAercam.Variables[trick_var].Name) }	

	// Rover and LLT
	for trick_var := range v.ROVER_LLT.Rover.Variables { varList[5] = append(varList[5], v.ROVER_LLT.Rover.Variables[trick_var].Name) }	
	for trick_var := range v.ROVER_LLT.LLT.Variables { varList[5] = append(varList[5], v.ROVER_LLT.LLT.Variables[trick_var].Name) }	

	return varList

}

// func PrintVars(varPath string) {

// 	v := ParseTrickXML(varPath)

// 	fmt.Printf("MPCV Variables:\n")
// 	for trick_var := range v.MPCV.GNC.Variables { fmt.Printf("---GNC: %v\n", v.MPCV.GNC.Variables[trick_var]) }	
// 	for trick_var := range v.MPCV.Hware.Variables { fmt.Printf("---Hware: %v\n", v.MPCV.Hware.Variables[trick_var]) }	
// 	for trick_var := range v.MPCV.States.Variables { fmt.Printf("---States: %v\n", v.MPCV.States.Variables[trick_var]) }	
// 	for trick_var := range v.MPCV.GNC_simct.Variables { fmt.Printf("---GNC_simct: %v\n", v.MPCV.GNC_simct.Variables[trick_var]) }
// 	for trick_var := range v.MPCV.HC.Variables { fmt.Printf("---HC: %v\n", v.MPCV.HC.Variables[trick_var]) }
// 	fmt.Printf("---AutoControl: %v\n", v.MPCV.AutoControl)

// 	fmt.Printf("\n\nPM Variables:\n")
// 	for trick_var := range v.PM.GNC.Variables { fmt.Printf("---GNC: %v\n", v.PM.GNC.Variables[trick_var]) }	
// 	for trick_var := range v.PM.States.Variables { fmt.Printf("---States: %v\n", v.PM.States.Variables[trick_var]) }	
// 	for trick_var := range v.PM.GNC_simct.Variables { fmt.Printf("---GNC_simct: %v\n", v.PM.GNC_simct.Variables[trick_var]) }
// 	for trick_var := range v.PM.HC.Variables { fmt.Printf("---HC: %v\n", v.PM.HC.Variables[trick_var]) }

// 	fmt.Printf("\n\nROBO Variables:\n")
// 	for trick_var := range v.ROBO.Mmsev.Variables { fmt.Printf("---Mmsev: %v\n", v.ROBO.Mmsev.Variables[trick_var]) }	
// 	for trick_var := range v.ROBO.Nexsys.Variables { fmt.Printf("---Nexsys: %v\n", v.ROBO.Nexsys.Variables[trick_var]) }	
// 	for trick_var := range v.ROBO.Arm.Variables { fmt.Printf("---Arm: %v\n", v.ROBO.Arm.Variables[trick_var]) }
// 	for trick_var := range v.ROBO.NextStep.Variables { fmt.Printf("---NextStep: %v\n", v.ROBO.NextStep.Variables[trick_var]) }
// 	for trick_var := range v.ROBO.Door.Variables { fmt.Printf("---Door: %v\n", v.ROBO.Door.Variables[trick_var]) }

// 	fmt.Printf("\n\nSUBSYS Variables:\n")
// 	for trick_var := range v.SUBSYS.HalAirlock.Variables { fmt.Printf("---HalAirlock: %v\n", v.SUBSYS.HalAirlock.Variables[trick_var]) }	
// 	for trick_var := range v.SUBSYS.HabAirlock.Variables { fmt.Printf("---HabAirlock: %v\n", v.SUBSYS.HabAirlock.Variables[trick_var]) }	
// 	for trick_var := range v.SUBSYS.MpcvArs.Variables { fmt.Printf("---MpcvArs: %v\n", v.SUBSYS.MpcvArs.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.MpcvPcs.Variables { fmt.Printf("---MpcvPcs: %v\n", v.SUBSYS.MpcvPcs.Variables[trick_var]) }
	
// 	fmt.Printf("---Hab\n") 
// 	for trick_var := range v.SUBSYS.Hab.SystemAlarm.Variables { fmt.Printf("   ---SystemAlarm: %v\n", v.SUBSYS.Hab.SystemAlarm.Variables[trick_var]) }
// 	fmt.Printf("   ---Amps\n") 
// 	fmt.Printf("      ---Ps01\n")
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps01.Battery.Variables { fmt.Printf("         ---Battery: %v\n", v.SUBSYS.Hab.HabAmps.Ps01.Battery.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps01.Solar.Variables { fmt.Printf("         ---Solar: %v\n", v.SUBSYS.Hab.HabAmps.Ps01.Solar.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps01.SolarReg.Variables { fmt.Printf("         ---SolarReg: %v\n", v.SUBSYS.Hab.HabAmps.Ps01.SolarReg.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps01.BatSwitch.Variables { fmt.Printf("         ---BatSwitch: %v\n", v.SUBSYS.Hab.HabAmps.Ps01.BatSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps01.SolSwitch.Variables { fmt.Printf("         ---SolSwitch: %v\n", v.SUBSYS.Hab.HabAmps.Ps01.SolSwitch.Variables[trick_var]) }

// 	fmt.Printf("      ---Ps02\n")
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps02.Battery.Variables { fmt.Printf("         ---Battery: %v\n", v.SUBSYS.Hab.HabAmps.Ps02.Battery.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps02.Solar.Variables { fmt.Printf("         ---Solar: %v\n", v.SUBSYS.Hab.HabAmps.Ps02.Solar.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps02.SolarReg.Variables { fmt.Printf("         ---SolarReg: %v\n", v.SUBSYS.Hab.HabAmps.Ps02.SolarReg.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps02.BatSwitch.Variables { fmt.Printf("         ---BatSwitch: %v\n", v.SUBSYS.Hab.HabAmps.Ps02.BatSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Ps02.SolSwitch.Variables { fmt.Printf("         ---SolSwitch: %v\n", v.SUBSYS.Hab.HabAmps.Ps02.SolSwitch.Variables[trick_var]) }

// 	fmt.Printf("      ---Mbsu01\n")
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.SarSwitch.Variables { fmt.Printf("         ---SarSwitch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu01.SarSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.BatSwitch.Variables { fmt.Printf("         ---BatSwitch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu01.BatSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.AuxSwitch.Variables { fmt.Printf("         ---AuxSwitch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu01.AuxSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.Out1Switch.Variables { fmt.Printf("         ---Out1Switch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu01.Out1Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.Out2Switch.Variables { fmt.Printf("         ---Out2Switch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu01.Out2Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.Out3Switch.Variables { fmt.Printf("         ---Out3Switch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu01.Out3Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.Out4Switch.Variables { fmt.Printf("         ---Out4Switch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu01.Out4Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu01.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu01.Housekeeping.Variables[trick_var]) }

// 	fmt.Printf("      ---Mbsu02\n")
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.SarSwitch.Variables { fmt.Printf("         ---SarSwitch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu02.SarSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.BatSwitch.Variables { fmt.Printf("         ---BatSwitch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu02.BatSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.AuxSwitch.Variables { fmt.Printf("         ---AuxSwitch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu02.AuxSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.Out1Switch.Variables { fmt.Printf("         ---Out1Switch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu02.Out1Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.Out2Switch.Variables { fmt.Printf("         ---Out2Switch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu02.Out2Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.Out3Switch.Variables { fmt.Printf("         ---Out3Switch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu02.Out3Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.Out4Switch.Variables { fmt.Printf("         ---Out4Switch: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu02.Out4Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Mbsu02.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hab.HabAmps.Mbsu02.Housekeeping.Variables[trick_var]) }

// 	fmt.Printf("      ---Pdu01\n")
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Mbsu01Switch.Variables { fmt.Printf("         ---Mbsu01Switch: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Mbsu01Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Mbsu02Switch.Variables { fmt.Printf("         ---Mbsu02Switch: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Mbsu02Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc01.Variables { fmt.Printf("         ---Rpc01: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Rpc01.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc02.Variables { fmt.Printf("         ---Rpc02: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Rpc02.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc03.Variables { fmt.Printf("         ---Rpc03: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Rpc03.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc04.Variables { fmt.Printf("         ---Rpc04: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Rpc04.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc05.Variables { fmt.Printf("         ---Rpc05: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Rpc05.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc06.Variables { fmt.Printf("         ---Rpc06: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Rpc06.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc07.Variables { fmt.Printf("         ---Rpc07: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Rpc07.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Rpc08.Variables { fmt.Printf("         ---Rpc08: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Rpc08.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu01.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hab.HabAmps.Pdu01.Housekeeping.Variables[trick_var]) }

// 	fmt.Printf("      ---Pdu02\n")
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Mbsu01Switch.Variables { fmt.Printf("         ---Mbsu01Switch: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Mbsu01Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Mbsu02Switch.Variables { fmt.Printf("         ---Mbsu02Switch: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Mbsu02Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc01.Variables { fmt.Printf("         ---Rpc01: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Rpc01.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc02.Variables { fmt.Printf("         ---Rpc02: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Rpc02.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc03.Variables { fmt.Printf("         ---Rpc03: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Rpc03.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc04.Variables { fmt.Printf("         ---Rpc04: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Rpc04.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc05.Variables { fmt.Printf("         ---Rpc05: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Rpc05.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc06.Variables { fmt.Printf("         ---Rpc06: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Rpc06.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc07.Variables { fmt.Printf("         ---Rpc07: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Rpc07.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Rpc08.Variables { fmt.Printf("         ---Rpc08: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Rpc08.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu02.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hab.HabAmps.Pdu02.Housekeeping.Variables[trick_var]) }

// 	fmt.Printf("      ---Pdu03\n")
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Mbsu01Switch.Variables { fmt.Printf("         ---Mbsu01Switch: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Mbsu01Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Mbsu02Switch.Variables { fmt.Printf("         ---Mbsu02Switch: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Mbsu02Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc01.Variables { fmt.Printf("         ---Rpc01: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Rpc01.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc02.Variables { fmt.Printf("         ---Rpc02: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Rpc02.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc03.Variables { fmt.Printf("         ---Rpc03: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Rpc03.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc04.Variables { fmt.Printf("         ---Rpc04: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Rpc04.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc05.Variables { fmt.Printf("         ---Rpc05: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Rpc05.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc06.Variables { fmt.Printf("         ---Rpc06: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Rpc06.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc07.Variables { fmt.Printf("         ---Rpc07: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Rpc07.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Rpc08.Variables { fmt.Printf("         ---Rpc08: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Rpc08.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu03.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hab.HabAmps.Pdu03.Housekeeping.Variables[trick_var]) }

// 	fmt.Printf("      ---Pdu04\n")
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Mbsu01Switch.Variables { fmt.Printf("         ---Mbsu01Switch: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Mbsu01Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Mbsu02Switch.Variables { fmt.Printf("         ---Mbsu02Switch: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Mbsu02Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc01.Variables { fmt.Printf("         ---Rpc01: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Rpc01.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc02.Variables { fmt.Printf("         ---Rpc02: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Rpc02.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc03.Variables { fmt.Printf("         ---Rpc03: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Rpc03.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc04.Variables { fmt.Printf("         ---Rpc04: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Rpc04.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc05.Variables { fmt.Printf("         ---Rpc05: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Rpc05.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc06.Variables { fmt.Printf("         ---Rpc06: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Rpc06.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc07.Variables { fmt.Printf("         ---Rpc07: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Rpc07.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Rpc08.Variables { fmt.Printf("         ---Rpc08: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Rpc08.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabAmps.Pdu04.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hab.HabAmps.Pdu04.Housekeeping.Variables[trick_var]) }

// 	for trick_var := range v.SUBSYS.Hab.HabAmps.MagicPower.Variables { fmt.Printf("      ---MagicPower: %v\n", v.SUBSYS.Hab.HabAmps.MagicPower.Variables[trick_var]) }

// 	for trick_var := range v.SUBSYS.Hab.Water.Variables { fmt.Printf("   ---Water: %v\n", v.SUBSYS.Hab.Water.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.Itcs.Variables { fmt.Printf("   ---Itcs: %v\n", v.SUBSYS.Hab.Itcs.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.EtcsA.Variables { fmt.Printf("   ---EtcsA: %v\n", v.SUBSYS.Hab.EtcsA.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.EtcsB.Variables { fmt.Printf("   ---EtcsB: %v\n", v.SUBSYS.Hab.EtcsB.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.HabCal.Variables { fmt.Printf("   ---HabCal: %v\n", v.SUBSYS.Hab.HabCal.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.EamArs.Variables { fmt.Printf("   ---EamArs: %v\n", v.SUBSYS.Hab.EamArs.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hab.Pcs.Variables { fmt.Printf("   ---Pcs: %v\n", v.SUBSYS.Hab.Pcs.Variables[trick_var]) }

// 	fmt.Printf("---Hal\n") 
// 	for trick_var := range v.SUBSYS.Hal.SystemAlarm.Variables { fmt.Printf("   ---SystemAlarm: %v\n", v.SUBSYS.Hal.SystemAlarm.Variables[trick_var]) }
// 	fmt.Printf("   ---Amps\n") 
// 	fmt.Printf("      ---Ps01\n")
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps01.Battery.Variables { fmt.Printf("         ---Battery: %v\n", v.SUBSYS.Hal.HalAmps.Ps01.Battery.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps01.Solar.Variables { fmt.Printf("         ---Solar: %v\n", v.SUBSYS.Hal.HalAmps.Ps01.Solar.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps01.SolarReg.Variables { fmt.Printf("         ---SolarReg: %v\n", v.SUBSYS.Hal.HalAmps.Ps01.SolarReg.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps01.BatSwitch.Variables { fmt.Printf("         ---BatSwitch: %v\n", v.SUBSYS.Hal.HalAmps.Ps01.BatSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps01.SolSwitch.Variables { fmt.Printf("         ---SolSwitch: %v\n", v.SUBSYS.Hal.HalAmps.Ps01.SolSwitch.Variables[trick_var]) }

// 	fmt.Printf("      ---Ps02\n")
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps02.Battery.Variables { fmt.Printf("         ---Battery: %v\n", v.SUBSYS.Hal.HalAmps.Ps02.Battery.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps02.Solar.Variables { fmt.Printf("         ---Solar: %v\n", v.SUBSYS.Hal.HalAmps.Ps02.Solar.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps02.SolarReg.Variables { fmt.Printf("         ---SolarReg: %v\n", v.SUBSYS.Hal.HalAmps.Ps02.SolarReg.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps02.BatSwitch.Variables { fmt.Printf("         ---BatSwitch: %v\n", v.SUBSYS.Hal.HalAmps.Ps02.BatSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Ps02.SolSwitch.Variables { fmt.Printf("         ---SolSwitch: %v\n", v.SUBSYS.Hal.HalAmps.Ps02.SolSwitch.Variables[trick_var]) }

// 	fmt.Printf("      ---Mbsu01\n")
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.SarSwitch.Variables { fmt.Printf("         ---SarSwitch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu01.SarSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.BatSwitch.Variables { fmt.Printf("         ---BatSwitch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu01.BatSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.AuxSwitch.Variables { fmt.Printf("         ---AuxSwitch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu01.AuxSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.Out1Switch.Variables { fmt.Printf("         ---Out1Switch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu01.Out1Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.Out2Switch.Variables { fmt.Printf("         ---Out2Switch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu01.Out2Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.Out3Switch.Variables { fmt.Printf("         ---Out3Switch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu01.Out3Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.Out4Switch.Variables { fmt.Printf("         ---Out4Switch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu01.Out4Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu01.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu01.Housekeeping.Variables[trick_var]) }

// 	fmt.Printf("      ---Mbsu02\n")
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.SarSwitch.Variables { fmt.Printf("         ---SarSwitch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu02.SarSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.BatSwitch.Variables { fmt.Printf("         ---BatSwitch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu02.BatSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.AuxSwitch.Variables { fmt.Printf("         ---AuxSwitch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu02.AuxSwitch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.Out1Switch.Variables { fmt.Printf("         ---Out1Switch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu02.Out1Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.Out2Switch.Variables { fmt.Printf("         ---Out2Switch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu02.Out2Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.Out3Switch.Variables { fmt.Printf("         ---Out3Switch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu02.Out3Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.Out4Switch.Variables { fmt.Printf("         ---Out4Switch: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu02.Out4Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Mbsu02.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hal.HalAmps.Mbsu02.Housekeeping.Variables[trick_var]) }

// 	fmt.Printf("      ---Pdu01\n")
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Mbsu01Switch.Variables { fmt.Printf("         ---Mbsu01Switch: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Mbsu01Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Mbsu02Switch.Variables { fmt.Printf("         ---Mbsu02Switch: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Mbsu02Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc01.Variables { fmt.Printf("         ---Rpc01: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Rpc01.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc02.Variables { fmt.Printf("         ---Rpc02: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Rpc02.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc03.Variables { fmt.Printf("         ---Rpc03: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Rpc03.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc04.Variables { fmt.Printf("         ---Rpc04: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Rpc04.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc05.Variables { fmt.Printf("         ---Rpc05: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Rpc05.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc06.Variables { fmt.Printf("         ---Rpc06: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Rpc06.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc07.Variables { fmt.Printf("         ---Rpc07: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Rpc07.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Rpc08.Variables { fmt.Printf("         ---Rpc08: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Rpc08.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu01.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hal.HalAmps.Pdu01.Housekeeping.Variables[trick_var]) }

// 	fmt.Printf("      ---Pdu02\n")
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Mbsu01Switch.Variables { fmt.Printf("         ---Mbsu01Switch: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Mbsu01Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Mbsu02Switch.Variables { fmt.Printf("         ---Mbsu02Switch: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Mbsu02Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc01.Variables { fmt.Printf("         ---Rpc01: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Rpc01.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc02.Variables { fmt.Printf("         ---Rpc02: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Rpc02.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc03.Variables { fmt.Printf("         ---Rpc03: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Rpc03.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc04.Variables { fmt.Printf("         ---Rpc04: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Rpc04.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc05.Variables { fmt.Printf("         ---Rpc05: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Rpc05.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc06.Variables { fmt.Printf("         ---Rpc06: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Rpc06.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc07.Variables { fmt.Printf("         ---Rpc07: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Rpc07.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Rpc08.Variables { fmt.Printf("         ---Rpc08: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Rpc08.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu02.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hal.HalAmps.Pdu02.Housekeeping.Variables[trick_var]) }

// 	fmt.Printf("      ---Pdu03\n")
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Mbsu01Switch.Variables { fmt.Printf("         ---Mbsu01Switch: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Mbsu01Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Mbsu02Switch.Variables { fmt.Printf("         ---Mbsu02Switch: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Mbsu02Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc01.Variables { fmt.Printf("         ---Rpc01: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Rpc01.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc02.Variables { fmt.Printf("         ---Rpc02: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Rpc02.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc03.Variables { fmt.Printf("         ---Rpc03: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Rpc03.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc04.Variables { fmt.Printf("         ---Rpc04: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Rpc04.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc05.Variables { fmt.Printf("         ---Rpc05: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Rpc05.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc06.Variables { fmt.Printf("         ---Rpc06: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Rpc06.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc07.Variables { fmt.Printf("         ---Rpc07: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Rpc07.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Rpc08.Variables { fmt.Printf("         ---Rpc08: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Rpc08.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu03.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hal.HalAmps.Pdu03.Housekeeping.Variables[trick_var]) }

// 	fmt.Printf("      ---Pdu04\n")
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Mbsu01Switch.Variables { fmt.Printf("         ---Mbsu01Switch: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Mbsu01Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Mbsu02Switch.Variables { fmt.Printf("         ---Mbsu02Switch: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Mbsu02Switch.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc01.Variables { fmt.Printf("         ---Rpc01: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Rpc01.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc02.Variables { fmt.Printf("         ---Rpc02: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Rpc02.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc03.Variables { fmt.Printf("         ---Rpc03: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Rpc03.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc04.Variables { fmt.Printf("         ---Rpc04: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Rpc04.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc05.Variables { fmt.Printf("         ---Rpc05: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Rpc05.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc06.Variables { fmt.Printf("         ---Rpc06: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Rpc06.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc07.Variables { fmt.Printf("         ---Rpc07: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Rpc07.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Rpc08.Variables { fmt.Printf("         ---Rpc08: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Rpc08.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.HalAmps.Pdu04.Housekeeping.Variables { fmt.Printf("         ---Housekeeping: %v\n", v.SUBSYS.Hal.HalAmps.Pdu04.Housekeeping.Variables[trick_var]) }

// 	for trick_var := range v.SUBSYS.Hal.HalAmps.MagicPower.Variables { fmt.Printf("      ---MagicPower: %v\n", v.SUBSYS.Hal.HalAmps.MagicPower.Variables[trick_var]) }

// 	for trick_var := range v.SUBSYS.Hal.SubsOverview.Variables { fmt.Printf("   ---SubsOverview: %v\n", v.SUBSYS.Hal.SubsOverview.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.PotableWater.Variables { fmt.Printf("   ---PotableWater: %v\n", v.SUBSYS.Hal.PotableWater.Variables[trick_var]) }
// 	// for trick_var := range v.SUBSYS.Hal.PotableWater_Pump.Variables { fmt.Printf("   ---PotableWater_Pump: %v\n", v.SUBSYS.Hal.PotableWater_Pump.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.WasteWater.Variables { fmt.Printf("   ---WasteWater: %v\n", v.SUBSYS.Hal.WasteWater.Variables[trick_var]) }
// 	// for trick_var := range v.SUBSYS.Hal.WasteWater_Pump.Variables { fmt.Printf("   ---WasteWater_Pump: %v\n", v.SUBSYS.Hal.WasteWater_Pump.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.TCS.Variables { fmt.Printf("   ---TCS: %v\n", v.SUBSYS.Hal.TCS.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.ARS.Variables { fmt.Printf("   ---ARS: %v\n", v.SUBSYS.Hal.ARS.Variables[trick_var]) }
// 	// for trick_var := range v.SUBSYS.Hal.ARS_CabinInfo.Variables { fmt.Printf("   ---ARS_CabinInfo: %v\n", v.SUBSYS.Hal.ARS_CabinInfo.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.ARS_RCA.Variables { fmt.Printf("   ---ARS_RCA: %v\n", v.SUBSYS.Hal.ARS_RCA.Variables[trick_var]) }
// 	for trick_var := range v.SUBSYS.Hal.Pcs.Variables { fmt.Printf("   ---Pcs: %v\n", v.SUBSYS.Hal.Pcs.Variables[trick_var]) }

// 	for trick_var := range v.SUBSYS.Crew.Variables { fmt.Printf("---Crew: %v\n", v.SUBSYS.Crew.Variables[trick_var]) }	

// 	fmt.Printf("\n\nCamera Variables:\n")
// 	for trick_var := range v.CAM.Telescope.Variables { fmt.Printf("---Telescope: %v\n", v.CAM.Telescope.Variables[trick_var]) }	
// 	for trick_var := range v.CAM.MmsevAercam.Variables { fmt.Printf("---MmsevAercam: %v\n", v.CAM.MmsevAercam.Variables[trick_var]) }	
// }