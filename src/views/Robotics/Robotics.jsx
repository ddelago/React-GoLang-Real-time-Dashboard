import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import Socket from "variables/Sockets.jsx";

class Robotics extends Component {

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
      this.socket.sendMessage("activePanel", "robo");
    } 
  }

  componentDidMount() {
    // Request list of variables at this time interval
    this.interval = setInterval(() => this.tick(), 150);

    this.socket.websocket.onopen = evt => { 
      this.socket.sendMessage("activePanel", "robo");
    }

    this.socket.websocket.onmessage = evt => { 
      this.socket.varReceived(evt, "robo");
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
    var jointAngles = {}
    var jointAutoAngles = {}
    var POR = {}
    var states = {}
    var coordVariables = {}
    var hcVariables = {}
    var posAttVariables = {}
    var propVariables = {}
    var rangeVariables = {}
    var transitVariables = {}
    // Check if valid message received
    if (this.socket.websocket.readyState === 1 && this.state.varListReceived === true && this.state.trickVarMap.length !== 0 
      && typeof this.state.trickVarMap["panel"] !== 'undefined' && this.state.trickVarMap["panel"].value === "robo") {
      jointAngles = {
        sr: (this.state.trickVarMap["NextSTEPArm.kinemat.out.joint_angle[1]"].value / (Math.PI / 180)).toFixed(2),
        sp: (this.state.trickVarMap["NextSTEPArm.kinemat.out.joint_angle[2]"].value / (Math.PI / 180)).toFixed(2),
        er: (this.state.trickVarMap["NextSTEPArm.kinemat.out.joint_angle[3]"].value / (Math.PI / 180)).toFixed(2),
        ep: (this.state.trickVarMap["NextSTEPArm.kinemat.out.joint_angle[4]"].value / (Math.PI / 180)).toFixed(2),
        wr: (this.state.trickVarMap["NextSTEPArm.kinemat.out.joint_angle[5]"].value / (Math.PI / 180)).toFixed(2),
        wp: (this.state.trickVarMap["NextSTEPArm.kinemat.out.joint_angle[6]"].value / (Math.PI / 180)).toFixed(2),
        eer: (this.state.trickVarMap["NextSTEPArm.kinemat.out.joint_angle[7]"].value / (Math.PI / 180)).toFixed(2)
      }
      jointAutoAngles = {
        sr: (this.state.trickVarMap["NextSTEPArm.sequencer.joint_angles[1]"].value / (Math.PI / 180)).toFixed(2),
        sp: (this.state.trickVarMap["NextSTEPArm.sequencer.joint_angles[2]"].value / (Math.PI / 180)).toFixed(2),
        er: (this.state.trickVarMap["NextSTEPArm.sequencer.joint_angles[3]"].value / (Math.PI / 180)).toFixed(2),
        ep: (this.state.trickVarMap["NextSTEPArm.sequencer.joint_angles[4]"].value / (Math.PI / 180)).toFixed(2),
        wr: (this.state.trickVarMap["NextSTEPArm.sequencer.joint_angles[5]"].value / (Math.PI / 180)).toFixed(2),
        wp: (this.state.trickVarMap["NextSTEPArm.sequencer.joint_angles[6]"].value / (Math.PI / 180)).toFixed(2),
        eer: (this.state.trickVarMap["NextSTEPArm.sequencer.joint_angles[7]"].value / (Math.PI / 180)).toFixed(2)
      }
      POR = {
        x: parseFloat(this.state.trickVarMap["NextSTEPArm.kinemat.out.r_origin_por[0]"].value).toFixed(2),
        y: parseFloat(this.state.trickVarMap["NextSTEPArm.kinemat.out.r_origin_por[1]"].value).toFixed(2),
        z: parseFloat(this.state.trickVarMap["NextSTEPArm.kinemat.out.r_origin_por[2]"].value).toFixed(2),
        pitch: (this.state.trickVarMap["NextSTEPArm.kinemat.out.origin_por_ang[0]"].value / (Math.PI / 180)).toFixed(2),
        yaw: (this.state.trickVarMap["NextSTEPArm.kinemat.out.origin_por_ang[1]"].value / (Math.PI / 180)).toFixed(2),
        roll: (this.state.trickVarMap["NextSTEPArm.kinemat.out.origin_por_ang[2]"].value / (Math.PI / 180)).toFixed(2)
      }
      states = {
        trayState: this.state.trickVarMap["SAL_door_port_tray.trayState"].value,
        trayExtension: this.state.trickVarMap["SAL_door_port_tray.trayExtension"].value,
        doorState: this.state.trickVarMap["SAL_door_port.state"].value,
        doorAngle: (this.state.trickVarMap["SAL_door_port.hinge_angle"].value / (Math.PI / 180)).toFixed(2),
        captured: this.state.trickVarMap["NextSTEPArm.sequencer.captureState"].value,
        armBase: this.state.trickVarMap["NextSTEPArm.sequencer.baseLocID"].value,
        hc_rate: parseFloat(this.state.trickVarMap["NextSTEPArm.sequencer.hc_rate"].value).toFixed(2),
        singularity: this.state.trickVarMap["NextSTEPArm.sequencer.singularity"].value
      }
    }
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Robotic States"
                category="Here is a subtitle for this table"
                hCenter
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr className="center-header">
                          <th><b>Tray State</b></th>
                          <th><b>Tray Extension</b></th>
                          <th><b>Door State</b></th>
                          <th><b>Door Angle</b></th>
                          <th><b>Capture State</b></th>
                          <th><b>Arm Base</b></th>
                          <th><b>HC Rate</b></th>
                          <th><b>Singularity</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="center-body">
                        <td>{states.trayState}</td>
                        <td>{states.trayExtension}</td>
                        <td>{states.doorState}</td>
                        <td>{states.doorAngle}</td>
                        <td>{states.captured}</td>
                        <td>{states.armBase}</td>
                        <td>{states.hc_rate}</td>
                        <td>{states.singularity}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title="Joint Angles (degrees)"
                category="Here is a subtitle for this table"
                hCenter
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr className="center-header">
                          <th><b>SR</b></th>
                          <th><b>SP</b></th>
                          <th><b>ER</b></th>
                          <th><b>EP</b></th>
                          <th><b>WR</b></th>
                          <th><b>WP</b></th>
                          <th><b>EER</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="center-body">
                        <td>{jointAngles.sr}</td>
                        <td>{jointAngles.sp}</td>
                        <td>{jointAngles.er}</td>
                        <td>{jointAngles.ep}</td>
                        <td>{jointAngles.wr}</td>
                        <td>{jointAngles.wp}</td>
                        <td>{jointAngles.eer}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title="Joint Auto Target (degrees)"
                category="Here is a subtitle for this table"
                hCenter
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr className="center-header">
                          <th><b>SR</b></th>
                          <th><b>SP</b></th>
                          <th><b>ER</b></th>
                          <th><b>EP</b></th>
                          <th><b>WR</b></th>
                          <th><b>WP</b></th>
                          <th><b>EER</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="center-body">
                        <td>{jointAutoAngles.sr}</td>
                        <td>{jointAutoAngles.sp}</td>
                        <td>{jointAutoAngles.er}</td>
                        <td>{jointAutoAngles.ep}</td>
                        <td>{jointAutoAngles.wr}</td>
                        <td>{jointAutoAngles.wp}</td>
                        <td>{jointAutoAngles.eer}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title="POR (meters, degrees)"
                category="Here is a subtitle for this table"
                hCenter
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr className="center-header">
                          <th><b>X</b></th>
                          <th><b>Y</b></th>
                          <th><b>Z</b></th>
                          <th><b>Pitch</b></th>
                          <th><b>Yaw</b></th>
                          <th><b>Roll</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="center-body">
                        <td>{POR.x}</td>
                        <td>{POR.y}</td>
                        <td>{POR.z}</td>
                        <td>{POR.pitch}</td>
                        <td>{POR.yaw}</td>
                        <td>{POR.roll}</td>
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

export default Robotics;
