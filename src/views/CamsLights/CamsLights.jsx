import React, { Component } from "react";
import { Grid, Row, Col, Table, MenuItem, DropdownButton, ButtonToolbar, ButtonGroup } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import Socket from "variables/Sockets.jsx";
import Button from 'components/CustomButton/CustomButton';
import MyCam from 'views/CamsLights/MyCam.jsx'

class CamsLights extends Component {

 // Set variables array
  constructor(props){
    super(props);

    this.state = {
      trickVarMap: {},
      seconds: 0,
      varListReceived: false,
      activeComponent: '',
      componentDisplayed: []
    };
     
    this.socket = new Socket();
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.changeActiveComponent = this.changeActiveComponent.bind(this);
  }

  tick() {
    // Change of state forces re-render
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));

    if (this.socket.websocket.readyState === 1) {
      this.socket.sendMessage("activePanel", "cams");
    } 
  }

  componentDidMount() {
    // Request list of variables at this time interval
    this.interval = setInterval(() => this.tick(), 150);

    this.socket.websocket.onopen = evt => { 
      this.socket.sendMessage("activePanel", "cams");
    }

    this.socket.websocket.onmessage = evt => { 
      this.socket.varReceived(evt, "cams");
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

  changeActiveComponent() {
    
    var activeDisplay;

    if (this.activeComponentString == 'overview') {
      activeDisplay = [
        <div>
          <Row>
            <MyCam size='6' title='Overview' address="http://192.70.120.237/mjpg/video.mjpg?camera=1"/>
            <MyCam size='6' title='Nest Front Camera 1' address="http://192.70.120.237/mjpg/video.mjpg?camera=5"/>
          </Row>
          <Row>
            <MyCam size='6' title='View Area 2' address="http://192.70.120.237/mjpg/video.mjpg?camera=6"/>
            <MyCam size='6' title='View Area 3' address="http://192.70.120.237/mjpg/video.mjpg?camera=7"/>
          </Row>
        </div>]
    }
    else if (this.activeComponentString == 'hab workstations') {
      activeDisplay = [
        <div>
          <Row>
            <MyCam size='6' title='HAB CW1 D1' address="http://root:ipasuser@192.70.126.237:17201/video?nativeresolution=1"/>
            <MyCam size='6' title='HAB CW1 D2' address="http://root:ipasuser@192.70.126.237:17202/video?nativeresolution=1"/>
          </Row>
          <Row>
            <MyCam size='6' title='HAB CW2 D1' address="http://root:ipasuser@192.70.126.237:17203/video?nativeresolution=1"/>
            <MyCam size='6' title='HAB CW2 D2' address="http://root:ipasuser@192.70.126.237:17204/video?nativeresolution=1"/>
          </Row>
        </div>]
    }
    else if (this.activeComponentString == 'hal workstations') {
      activeDisplay = [
        <div>
          <Row>
            <MyCam size='6' title='HAL CW1 D1' address="http://root:ipasuser@192.70.126.237:17205/video?nativeresolution=1"/>
            <MyCam size='6' title='HAL CW1 D2' address="http://192.70.126.237:17206/video?nativeresolution=1"/>
          </Row>
          <Row>
            <MyCam size='6' title='HAL CW2 D1' address="http://root:ipasuser@192.70.126.237:17207/video?nativeresolution=1"/>
            <MyCam size='6' title='HAL CW2 D2' address="http://root:ipasuser@192.70.126.237:17208/video?nativeresolution=1"/>
          </Row>
        </div>]
    }
    else if (this.activeComponentString == 'hab overview') {
      activeDisplay = [
        <div>
          <Row>
            <MyCam size='4' title='HAB Plan View' address="http://root:ipasuser@192.70.126.53/mjpg/1/video.mjpg?camera=1"/>
            <MyCam size='4' title='HAB Starboard' address="http://192.70.120.237/mjpg/video.mjpg?camera=5"/>            
            <MyCam size='4' title='HAB Port' address="http://192.70.120.237/mjpg/video.mjpg?camera=5"/>
          </Row>
          <Row>
            <MyCam size='4' offset='2' title='HAB Glovebox' address="http://192.70.120.237/mjpg/video.mjpg?camera=6"/>
            <MyCam size='4' title='HAB Aft' address="http://192.70.120.237/mjpg/video.mjpg?camera=7"/>
          </Row>
        </div>]
    }
    else if (this.activeComponentString == 'test') {
      activeDisplay = [
        <div>
          <Row>
            <MyCam size='4' title='Test' address="http://root:ipasuser@192.70.126.237:17209/video?nativeresolution=1"/>
            <MyCam size='4' title='SME' address="http://root:ipasuser@192.70.126.237:17210/video?nativeresolution=1"/>            
            <MyCam size='4' title='MCC' address="http://192.70.126.237:17200/video?nativeresolution=1"/>
          </Row>
        </div>]
    }

    this.setState({
        componentDisplayed: activeDisplay
    });
  }

  onClick(e){
    this.activeComponentString = e.target.value
    this.changeActiveComponent();
  }
  
  onSelect(eventKey){
    this.activeComponentString = eventKey;
    this.changeActiveComponent();
  }

  // root:ipasuser are credentials
  render() {
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
                      <Button bsStyle="primary" value="overview" onClick={this.onClick}>Gateway Overview</Button>
                      <Button bsStyle="primary" value="hab workstations" onClick={this.onClick}>HAB Workstations</Button>
                      <Button bsStyle="primary" value="hab overview" onClick={this.onClick}>HAB Cameras</Button>
                      <Button bsStyle="primary" value="hal workstations" onClick={this.onClick}>HAL Workstations</Button>
                      <Button bsStyle="primary" value="test" onClick={this.onClick}>test</Button>
                    </ButtonGroup>
                  </div>
                }
              />
            </Col>
          </Row>
          {this.state.componentDisplayed}
        </Grid>
      </div>
    );
  }
}

export default CamsLights;
