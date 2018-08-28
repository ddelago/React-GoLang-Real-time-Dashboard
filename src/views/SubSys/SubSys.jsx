import React, { Component } from "react";
import { Grid, Row, Col, Table, MenuItem, DropdownButton, ButtonToolbar, ButtonGroup } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import Socket from "variables/Sockets.jsx";
import Button from 'components/CustomButton/CustomButton';
import MyTable from 'views/SubSys/MyTable.jsx'
import { getSubSysVars } from "variables/Variables.jsx";

class SubSys extends Component {

  // Set variables array
  constructor(props){
    super(props);

    this.state = {
      trickVarMap: {},
      seconds: 0,
      varListReceived: false,
      componentDisplayed: [<MyTable data='' title='Temp'/>]
    };
     
    this.socket = new Socket();
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.activeComponentString = '';
    this.changeActiveComponent = this.changeActiveComponent.bind(this);

    this.mpcv_hab_air = {}
    this.hab_hal_air = {}
    this.mpcv_pcs = {}

    this.hab_overview = {}
    this.hab_power_amps = {}
    this.hab_power_ps = {}
    this.hab_power_mbsu = {}
    this.hab_power_pdu12 = {}
    this.hab_power_pdu34 = {}
    this.hab_water = {}
    this.hab_tcs_itcs = {}
    this.hab_tcs_etcsA = {}
    this.hab_tcs_etcsB = {}
    this.hab_air_cal = {}
    this.hab_air_ars = {}
    this.hab_air_pcs = {}

    this.hal_overview = {}
    this.hal_power_amps = {}
    this.hal_power_ps = {}
    this.hal_power_mbsu = {}
    this.hal_power_pdu12 = {}
    this.hal_power_pdu34 = {}
    this.hal_water_potable = {}
    this.hal_water_waste = {}
    this.hal_tcs = {}
    this.hal_air_cal = {}
    this.hal_air_ars = {}
    this.hal_air_pcs = {}

    this.crew = {}
  }

  tick() {
    // Change of state forces re-render
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));

    if (this.socket.websocket.readyState === 1) {
      this.socket.sendMessage("activePanel", "subsys");
    } 
    // Check if valid message received
    if (this.socket.websocket.readyState === 1 && this.state.varListReceived === true && this.state.trickVarMap.length !== 0 
      && typeof this.state.trickVarMap["panel"] !== 'undefined' && this.state.trickVarMap["panel"].value === "subsys") {
      this.getVariables();    
      this.changeActiveComponent(this.activeComponentString)
    }
  }

  componentDidMount() {
    // Request list of variables at this time interval
    this.interval = setInterval(() => this.tick(), 150);

    this.socket.websocket.onopen = evt => { 
      this.socket.sendMessage("activePanel", "subsys");
    }

    this.socket.websocket.onmessage = evt => { 
      this.socket.varReceived(evt, "subsys");
      // variable list has updated
      if(this.socket.listUpdated){
        this.setState({
            trickVarMap: this.socket.varMap,
            varListReceived: true
        });   
      }
    }        
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeActiveComponent(component) {
    var activeComponent;
    if (component == "mpcv_hab_air"){ activeComponent = this.mpcv_hab_air}
    else if (component == "hab_hal_air"){ activeComponent = this.hab_hal_air}
    else if (component == "mpcv_pcs"){ activeComponent = this.mpcv_pcs}

    else if (component == "hab_overview"){ activeComponent = this.hab_overview}
    else if (component == "hab_power_amps"){ activeComponent = this.hab_power_amps}
    else if (component == "hab_power_ps"){ activeComponent = this.hab_power_ps}
    else if (component == "hab_power_mbsu"){ activeComponent = this.hab_power_mbsu}
    else if (component == "hab_power_pdu12"){ activeComponent = this.hab_power_pdu12}
    else if (component == "hab_power_pdu34"){ activeComponent = this.hab_power_pdu34}
    else if (component == "hab_water"){ activeComponent = this.hab_water}
    else if (component == "hab_tcs_itcs"){ activeComponent = this.hab_tcs_itcs}
    else if (component == "hab_tcs_etcsA"){ activeComponent = this.hab_tcs_etcsA}
    else if (component == "hab_tcs_etcsB"){ activeComponent = this.hab_tcs_etcsB}
    else if (component == "hab_air_cal"){ activeComponent = this.hab_air_cal}
    else if (component == "hab_air_ars"){ activeComponent = this.hab_air_ars}
    else if (component == "hab_air_pcs"){ activeComponent = this.hab_air_pcs}

    else if (component == "hal_overview"){ activeComponent = this.hal_overview}
    else if (component == "hal_power_amps"){ activeComponent = this.hal_power_amps}
    else if (component == "hal_power_ps"){ activeComponent = this.hal_power_ps}
    else if (component == "hal_power_mbsu"){ activeComponent = this.hal_power_mbsu}
    else if (component == "hal_power_pdu12"){ activeComponent = this.hal_power_pdu12}
    else if (component == "hal_power_pdu34"){ activeComponent = this.hal_power_pdu34}
    else if (component == "hal_water_potable"){ activeComponent = this.hal_water_potable}
    else if (component == "hal_water_waste"){ activeComponent = this.hal_water_waste}
    else if (component == "hal_tcs"){ activeComponent = this.hal_tcs}
    else if (component == "hal_air_cal"){ activeComponent = this.hal_air_cal}
    else if (component == "hal_air_ars"){ activeComponent = this.hal_air_ars}
    else if (component == "hal_air_pcs"){ activeComponent = this.hal_air_pcs}

    else if (component == "crew"){ activeComponent = this.crew}

    if (this.activeComponentString !== ''){
      this.setState({
        componentDisplayed: [<MyTable data={activeComponent} title={this.activeComponentString}/>] 
      });   
    }
  }

  onClick(e){
    this.activeComponentString = e.target.value
  }
  
  onSelect(eventKey){
    this.activeComponentString = eventKey;
  }

  getVariables() {
    var subsVarList = getSubSysVars(this.state.trickVarMap);
    this.mpcv_hab_air = subsVarList.mpcv_hab_air
    this.hab_hal_air = subsVarList.hab_hal_air
    this.mpcv_pcs = subsVarList.mpcv_pcs

    this.hab_overview = subsVarList.hab_overview
    this.hab_power_amps = subsVarList.hab_power_amps
    this.hab_power_ps = subsVarList.hab_power_ps
    this.hab_power_mbsu = subsVarList.hab_power_mbsu
    this.hab_power_pdu12 = subsVarList.hab_power_pdu12
    this.hab_power_pdu34 = subsVarList.hab_power_pdu34
    this.hab_water = subsVarList.hab_water
    this.hab_tcs_itcs = subsVarList.hab_tcs_itcs
    this.hab_tcs_etcsA = subsVarList.hab_tcs_etcsA
    this.hab_tcs_etcsB = subsVarList.hab_tcs_etcsB
    this.hab_air_cal = subsVarList.hab_air_cal
    this.hab_air_ars = subsVarList.hab_air_ars
    this.hab_air_pcs = subsVarList.hab_air_pcs

    this.hal_overview = subsVarList.hal_overview
    this.hal_power_amps = subsVarList.hal_power_amps
    this.hal_power_ps = subsVarList.hal_power_ps
    this.hal_power_mbsu = subsVarList.hal_power_mbsu
    this.hal_power_pdu12 = subsVarList.hal_power_pdu12
    this.hal_power_pdu34 = subsVarList.hal_power_pdu34
    this.hal_water_potable = subsVarList.hal_water_potable
    this.hal_water_waste = subsVarList.hal_water_waste
    this.hal_tcs = subsVarList.hal_tcs
    this.hal_air_cal = subsVarList.hal_air_cal
    this.hal_air_ars = subsVarList.hal_air_ars
    this.hal_air_pcs = subsVarList.hal_air_pcs

    this.crew = subsVarList.crew
  }

  render() {

    // Check if valid message received
    if (this.socket.websocket.readyState === 1 && this.state.varListReceived === true && this.state.trickVarMap.length !== 0 
      && typeof this.state.trickVarMap["panel"] !== 'undefined' && this.state.trickVarMap["panel"].value === "subsys") {
      this.getVariables();
    }

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Page Navigator"
                hCenter
                content={
                  <div align="center">
                    <ButtonGroup >
                      <Button bsStyle="primary" value="mpcv_hab_air" onClick={this.onClick}>MPCV-HAB Airflow</Button>
                      <Button bsStyle="primary" value="hab_hal_air" onClick={this.onClick}>HAB-HAL Airflow</Button>
                      <DropdownButton bsStyle="primary" title="MPCV Subsystem" id="dropdown-size-medium" onSelect={this.onSelect}>
                        <MenuItem eventKey="mpcv_pcs">PCS</MenuItem>
                      </DropdownButton>
                      <DropdownButton  bsStyle="primary" title="HAB Subsystem" id="dropdown-size-medium" onSelect={this.onSelect}>
                        <MenuItem eventKey="hab_overview">Systems Overview</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="hab_power_amps">Power: AMPS Overview</MenuItem>
                        <MenuItem eventKey="hab_power_ps">Power: Power Source</MenuItem>
                        <MenuItem eventKey="hab_power_mbsu">Power: MBSU</MenuItem>
                        <MenuItem eventKey="hab_power_pdu12">Power: PDU 1 and 2</MenuItem>
                        <MenuItem eventKey="hab_power_pdu34">Power: PDU 2 and 3</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="hab_water">Water Systems</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="hab_tcs_itcs">TCS: ITCS</MenuItem>
                        <MenuItem eventKey="hab_tcs_etcsA">TCS: ETCS Loop A</MenuItem>
                        <MenuItem eventKey="hab_tcs_etcsB">TCS: ETCS Loop B</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="hab_air_cal">Air Systems: CAL </MenuItem>
                        <MenuItem eventKey="hab_air_ars">Air Systems: ARS </MenuItem>
                        <MenuItem eventKey="hab_air_pcs">Air Systems: PCS </MenuItem>
                      </DropdownButton>
                      <DropdownButton bsStyle="primary" title="HAL Subsystem" id="dropdown-size-medium" onSelect={this.onSelect}>
                        <MenuItem eventKey="hal_overview">Systems Overview</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="hal_power_amps">Power: AMPS Overview</MenuItem>
                        <MenuItem eventKey="hal_power_ps">Power: Power Source</MenuItem>
                        <MenuItem eventKey="hal_power_mbsu">Power: MBSU</MenuItem>
                        <MenuItem eventKey="hal_power_pdu12">Power: PDU 1 and 2</MenuItem>
                        <MenuItem eventKey="hal_power_pdu34">Power: PDU 2 and 3</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="hal_water_potable">Water Systems: Potable</MenuItem>
                        <MenuItem eventKey="hal_water_waste">Water Systems: Waste</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="hal_tcs">TCS</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="hal_air_cal">Air Systems: CAL </MenuItem>
                        <MenuItem eventKey="hal_air_ars">Air Systems: ARS </MenuItem>
                        <MenuItem eventKey="hal_air_pcs">Air Systems: PCS </MenuItem>
                      </DropdownButton>
                      <Button bsStyle="primary" value="crew" onClick={this.onClick}>Crew</Button>
                    </ButtonGroup>
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            {this.state.componentDisplayed}
          </Row>
        </Grid>
      </div>
    );
  }
}



export default SubSys;
