import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import Socket from "variables/Sockets.jsx";

class RemoteOperations extends Component {

  // Set variables array
  constructor(props){
    super(props);

    this.state = {
      trickVarMap: {},
      seconds: 0,
      varListReceived: false
    };
     
    this.socket = new Socket();
  }

  tick() {
    // Change of state forces re-render
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));

    if (this.socket.websocket.readyState === 1) {
      this.socket.sendMessage("activePanel", "rover_llt");
    } 
  }

  componentDidMount() {
    // Request list of variables at this time interval
    this.interval = setInterval(() => this.tick(), 150);

    this.socket.websocket.onopen = evt => { 
      this.socket.sendMessage("activePanel", "rover_llt");
    }

    this.socket.websocket.onmessage = evt => { 
      this.socket.varReceived(evt, "rover_llt");
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

  render() {
    var rover = {}
    var llt = {}
    // Check if valid message received
    if (this.socket.websocket.readyState === 1 && this.state.varListReceived === true && this.state.trickVarMap.length !== 0 
      && typeof this.state.trickVarMap["panel"] !== 'undefined' && this.state.trickVarMap["panel"].value === "rover_llt") {
      rover = {
        distance: this.state.trickVarMap["rover_control.range"].value,
        velocity: this.state.trickVarMap["rover_control.roverRateAvg"].value,
        positionX: this.state.trickVarMap["dynamics.mbdyn.poi[5].r_display_to_poi[0]"].value,
        positionY: this.state.trickVarMap["dynamics.mbdyn.poi[5].r_display_to_poi[1]"].value,
        positionZ: this.state.trickVarMap["dynamics.mbdyn.poi[5].r_display_to_poi[2]"].value,
        wheelRpmLF: this.state.trickVarMap["rover_LF_wheel.node[0].joint_out.joint_rate[0]"].value,
        wheelRpmLR: this.state.trickVarMap["rover_LB_wheel.node[0].joint_out.joint_rate[0]"].value,
        wheelRpmRF: this.state.trickVarMap["rover_RF_wheel.node[0].joint_out.joint_rate[0]"].value,
        wheelRpmRR: this.state.trickVarMap["rover_RB_wheel.node[0].joint_out.joint_rate[0]"].value,
        cameraPan: this.state.trickVarMap["camera.pan"].value,
        cameraTilt: this.state.trickVarMap["camera.tilt"].value,
        cameraZoom: this.state.trickVarMap["camera.zoom"].value,
        velocityX: this.state.trickVarMap["rover_control.roverVel[0]"].value,
        velocityY: this.state.trickVarMap["rover_control.roverVel[1]"].value,
        velocityZ: this.state.trickVarMap["rover_control.roverVel[2]"].value,
        ellipCoordsLt: this.state.trickVarMap["rover_body.pfix.state.ellip_coords.latitude"].value,
        ellipCoordsLn: this.state.trickVarMap["rover_body.pfix.state.ellip_coords.longitude"].value,
        ellipCoordsAlt: this.state.trickVarMap["rover_body.pfix.state.ellip_coords.altitude"].value
      }
      llt = {
        range: this.state.trickVarMap["por_relstates.pos_target2por_mag"].value,
        rangeRate: this.state.trickVarMap["por_relstates.vel_target2por_mag"].value,
        relPositionX: this.state.trickVarMap["por_relstates.pos_target2por[0]"].value,
        relPositionY: this.state.trickVarMap["por_relstates.pos_target2por[1]"].value,
        relPositionZ: this.state.trickVarMap["por_relstates.pos_target2por[2]"].value,
        velocityX: this.state.trickVarMap["por_relstates.vel_target2por[0]"].value,
        velocityY: this.state.trickVarMap["por_relstates.vel_target2por[1]"].value,
        velocityZ: this.state.trickVarMap["por_relstates.vel_target2por[2]"].value,
        relAttdR: this.state.trickVarMap["por_relstates.eul_target2por_PYR[2]"].value,
        relAttdP: this.state.trickVarMap["por_relstates.eul_target2por_PYR[0]"].value,
        relAttdY: this.state.trickVarMap["por_relstates.eul_target2por_PYR[1]"].value,
        rateR: this.state.trickVarMap["por_relstates.omega_target2por[0]"].value, 
        rateP: this.state.trickVarMap["por_relstates.omega_target2por[1]"].value, 
        rateY: this.state.trickVarMap["por_relstates.omega_target2por[2]"].value
      }
    }
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Surface Rover"
                hCenter
                content={
                  <div className="intrinsic-container intrinsic-container-4x3">
                    <img className="iframe-image" src="http://root:ipasuser@192.70.126.237:18201/video?nativeresolution=1"/>
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Surface Manipulator"
                hCenter
                content={
                  <div className="intrinsic-container intrinsic-container-4x3">
                      <img className="iframe-image" src="http://root:ipasuser@192.70.126.237:19201/video?nativeresolution=1"/>
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} mdOffset={1}>
              <Card
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                          <th>Variable Name</th>
                          <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>distance</td>
                        <td>{rover.distance}</td>
                      </tr>
                      <tr>
                        <td>velocity</td>
                        <td>{rover.velocity}</td>
                      </tr>
                      <tr>
                        <td>positionX</td>
                        <td>{rover.positionX}</td>
                      </tr>
                      <tr>
                        <td>positionY</td>
                        <td>{rover.positionY}</td>
                      </tr>
                      <tr>
                        <td>positionZ</td>
                        <td>{rover.positionZ}</td>
                      </tr>
                      <tr>
                        <td>wheelRpmLF</td>
                        <td>{rover.wheelRpmLF}</td>
                      </tr>
                      <tr>
                        <td>wheelRpmLR</td>
                        <td>{rover.wheelRpmLR}</td>
                      </tr>
                      <tr>
                        <td>wheelRpmRF</td>
                        <td>{rover.wheelRpmRF}</td>
                      </tr>
                      <tr>
                        <td>wheelRpmRR</td>
                        <td>{rover.wheelRpmRR}</td>
                      </tr>
                      <tr>
                        <td>cameraPan</td>
                        <td>{rover.cameraPan}</td>
                      </tr>
                      <tr>
                        <td>cameraTilt</td>
                        <td>{rover.cameraTilt}</td>
                      </tr>
                      <tr>
                        <td>cameraZoom</td>
                        <td>{rover.cameraZoom}</td>
                      </tr>
                      <tr>
                        <td>velocityX</td>
                        <td>{rover.velocityX}</td>
                      </tr>
                      <tr>
                        <td>velocityY</td>
                        <td>{rover.velocityY}</td>
                      </tr>
                      <tr>
                        <td>velocityZ</td>
                        <td>{rover.velocityZ}</td>
                      </tr>
                      <tr>
                        <td>ellipCoordsLt</td>
                        <td>{rover.ellipCoordsLt}</td>
                      </tr>
                      <tr>
                        <td>ellipCoordsLn</td>
                        <td>{rover.ellipCoordsLn}</td>
                      </tr>
                      <tr>
                        <td>ellipCoordsAlt</td>
                        <td>{rover.ellipCoordsAlt}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={4} mdOffset={2}>
              <Card
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                          <th>Variable Name</th>
                          <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>range</td>
                        <td>{llt.range}</td>
                      </tr>
                      <tr>
                        <td>rangeRate</td>
                        <td>{llt.rangeRate}</td>
                      </tr>
                      <tr>
                        <td>relPositionX</td>
                        <td>{llt.relPositionX}</td>
                      </tr>
                      <tr>
                        <td>relPositionY</td>
                        <td>{llt.relPositionY}</td>
                      </tr>
                      <tr>
                        <td>relPositionZ</td>
                        <td>{llt.relPositionZ}</td>
                      </tr>
                      <tr>
                        <td>velocityX</td>
                        <td>{llt.velocityX}</td>
                      </tr>
                      <tr>
                        <td>velocityY</td>
                        <td>{llt.velocityY}</td>
                      </tr>
                      <tr>
                        <td>velocityZ</td>
                        <td>{llt.velocityZ}</td>
                      </tr>
                      <tr>
                        <td>relAttdR</td>
                        <td>{llt.relAttdR}</td>
                      </tr>
                      <tr>
                        <td>relAttdP</td>
                        <td>{llt.relAttdP}</td>
                      </tr>
                      <tr>
                        <td>relAttdY</td>
                        <td>{llt.relAttdY}</td>
                      </tr>
                      <tr>
                        <td>rateR</td>
                        <td>{llt.rateR}</td>
                      </tr>
                      <tr>
                        <td>rateP</td>
                        <td>{llt.rateP}</td>
                      </tr>
                      <tr>
                        <td>rateY</td>
                        <td>{llt.rateY}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default RemoteOperations;
