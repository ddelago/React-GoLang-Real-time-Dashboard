import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import Socket from "variables/Sockets.jsx";

class MPCV extends Component {

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
      this.socket.sendMessage("activePanel", "mpcv");
    } 
  }

  componentDidMount() {
    // Request list of variables at this time interval
    this.interval = setInterval(() => this.tick(), 150);

    this.socket.websocket.onopen = evt => { 
      this.socket.sendMessage("activePanel", "mpcv");
    }

    this.socket.websocket.onmessage = evt => { 
      this.socket.varReceived(evt, "mpcv");
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
    var coordVariables = {}
    var hcVariables = {}
    var posAttVariables = {}
    var propVariables = {}
    var rangeVariables = {}
    var transitVariables = {}
    // Check if valid message received
    if (this.socket.websocket.readyState === 1 && this.state.varListReceived === true && this.state.trickVarMap.length !== 0 
      && typeof this.state.trickVarMap["panel"] !== 'undefined' && this.state.trickVarMap["panel"].value === "mpcv") {
      coordVariables = {
        Lat: (this.state.trickVarMap["mpcv_dyn.pfix.state.ellip_coords.latitude"].value / (Math.PI / 180)).toFixed(3),
        Long: (this.state.trickVarMap["mpcv_dyn.pfix.state.ellip_coords.longitude"].value / (Math.PI / 180)).toFixed(3),
        Alt: Math.round(this.state.trickVarMap["mpcv_dyn.pfix.state.ellip_coords.altitude"].value)
      }
      hcVariables = {
        frame: "Vehicle SR",
        posGNC: this.state.trickVarMap["mpcv_gnc.moding.out.dcapp_gnc_tgt_pos"].value,
        attGNC: this.state.trickVarMap["mpcv_gnc.moding.out.dcapp_gnc_tgt_att"].value
      }
      posAttVariables = {
        xPos: parseFloat(this.state.trickVarMap["mpcv_gnc.nav.out.trans.r_tgtdp2vehdp_tgtdp[0]"].value).toFixed(2),
        yPos: parseFloat(this.state.trickVarMap["mpcv_gnc.nav.out.trans.r_tgtdp2vehdp_tgtdp[1]"].value).toFixed(2),
        zPos: parseFloat(this.state.trickVarMap["mpcv_gnc.nav.out.trans.r_tgtdp2vehdp_tgtdp[2]"].value).toFixed(2),
        xRate: parseFloat(this.state.trickVarMap["mpcv_gnc.nav.out.trans.v_tgtdp2vehdp_tgtdp_tgtdp[0]"].value).toFixed(2),
        y1Rate: parseFloat(this.state.trickVarMap["mpcv_gnc.nav.out.trans.v_tgtdp2vehdp_tgtdp_tgtdp[1]"].value).toFixed(2),
        zRate: parseFloat(this.state.trickVarMap["mpcv_gnc.nav.out.trans.v_tgtdp2vehdp_tgtdp_tgtdp[2]"].value).toFixed(2),
        rAtt: (this.state.trickVarMap["mpcv_gnc.nav.out.rot.E_tgtdp2vehdp_RPY[0]"].value / (Math.PI / 180)).toFixed(2),
        pAtt: (this.state.trickVarMap["mpcv_gnc.nav.out.rot.E_tgtdp2vehdp_RPY[1]"].value / (Math.PI / 180)).toFixed(2),
        yAtt: (this.state.trickVarMap["mpcv_gnc.nav.out.rot.E_tgtdp2vehdp_RPY[2]"].value / (Math.PI / 180)).toFixed(2),
        rRate: parseFloat(this.state.trickVarMap["mpcv_gnc.nav.out.rot.w_vehdp_wrt_tgtdp_tgtdp[0]"].value).toFixed(2),
        pRate: parseFloat(this.state.trickVarMap["mpcv_gnc.nav.out.rot.w_vehdp_wrt_tgtdp_tgtdp[1]"].value).toFixed(2),
        y2Rate: parseFloat(this.state.trickVarMap["mpcv_gnc.nav.out.rot.w_vehdp_wrt_tgtdp_tgtdp[2]"].value).toFixed(2)
      }
      propVariables = {
        deltaV: parseFloat(this.state.trickVarMap["mpcv_gnc.ctrlif_out.delta_vel_cmd_mag_sum"].value).toFixed(2),
        deltaW: parseFloat(this.state.trickVarMap["mpcv_gnc.ctrlif_out.delta_omega_cmd_mag_sum"].value).toFixed(2),
        mmh_1: Math.round(100 * this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.fuel_prop_mass1"].value / this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.fuel_prop_mass1_full"].value),
        n204_1: Math.round(100 * this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.oxidizer_prop_mass1"].value / this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.oxidizer_prop_mass1_full"].value),
        n204_2: Math.round(100 * this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.oxidizer_prop_mass2"].value / this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.oxidizer_prop_mass2_full"].value),
        mmh_2: Math.round(100 * this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.fuel_prop_mass2"].value / this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.fuel_prop_mass2_full"].value),
        mmh_1_Weight: Math.round(this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.fuel_prop_mass1"].value),
        n204_1_Weight: Math.round(this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.oxidizer_prop_mass1"].value),
        n204_2_Weight: Math.round(this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.oxidizer_prop_mass2"].value),
        mmh_2_Weight: Math.round(this.state.trickVarMap["mpcv_gnc_simct_interface.codec.inputs.fuel_prop_mass2"].value)
      }
      rangeVariables = {
        forwardRange: this.state.trickVarMap["mpcv_hware_sim_interface.variableServerInterface.outputs.forwardRangeSensor.range"].value,
        forwardRate: this.state.trickVarMap["mpcv_hware_sim_interface.variableServerInterface.outputs.forwardRangeSensor.rate"].value,
        downRange: this.state.trickVarMap["mpcv_hware_sim_interface.variableServerInterface.outputs.downRangeSensor.range"].value,
        downRate: this.state.trickVarMap["mpcv_hware_sim_interface.variableServerInterface.outputs.downRangeSensor.rate"].value,
        portRange: this.state.trickVarMap["mpcv_hware_sim_interface.variableServerInterface.outputs.portRangeSensor.range"].value,
        portRate: this.state.trickVarMap["mpcv_hware_sim_interface.variableServerInterface.outputs.portRangeSensor.rate"].value,
        starboardRange: this.state.trickVarMap["mpcv_hware_sim_interface.variableServerInterface.outputs.starboardRangeSensor.range"].value,
        starboardRate: this.state.trickVarMap["mpcv_hware_sim_interface.variableServerInterface.outputs.starboardRangeSensor.rate"].value,
        rngFndr1Range: 0.0,
        rngFndr1Rate: 0.0,
        rngFndr2Range: 0.0,
        rngFndr2Rate: 0.0
      }
      transitVariables = {
        x: this.state.trickVarMap["mpcv_gnc.moding.out.transfer_to_cmd[0]"].value,
        y: this.state.trickVarMap["mpcv_gnc.moding.out.transfer_to_cmd[1]"].value,
        z: this.state.trickVarMap["mpcv_gnc.moding.out.transfer_to_cmd[2]"].value
      }
    }
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={4}>
              <Card
                title="Coordinates"
                category="Here is a subtitle for this table"
                hCenter
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
                        <td>Lat</td>
                        <td>{coordVariables.Lat}</td>
                      </tr>
                      <tr>
                        <td>Long</td>
                        <td>{coordVariables.Long}</td>
                      </tr>
                      <tr>
                        <td>Alt (m)</td>
                        <td>{coordVariables.Alt}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Hand Control"
                category="Here is a subtitle for this table"
                hCenter
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
                        <td>HC Frame</td>
                        <td>{hcVariables.frame}</td>
                      </tr>
                      <tr>
                        <td>GNC Pos Target</td>
                        <td>{hcVariables.posGNC}</td>
                      </tr>
                      <tr>
                        <td>GNC Alt Target</td>
                        <td>{hcVariables.attGNC}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Transiting To"
                category="Here is a subtitle for this table"
                hCenter
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
                        <td>X</td>
                        <td>{transitVariables.x}</td>
                      </tr>
                      <tr>
                        <td>Y</td>
                        <td>{transitVariables.y}</td>
                      </tr>
                      <tr>
                        <td>Z</td>
                        <td>{transitVariables.z}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card
                title="Position/Attitude"
                category="Here is a subtitle for this table"
                hCenter
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                          <th>Variable Name</th>
                          <th>Value</th>
                          <th>Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>Pos (m)</td>
                        <td>Rate (m/s)</td>
                      </tr>
                      <tr>
                        <td>X</td>
                        <td>{posAttVariables.xPos}</td>
                        <td>{posAttVariables.xRate}</td>
                      </tr>
                      <tr>
                        <td>Y</td>
                        <td>{posAttVariables.yPos}</td>
                        <td>{posAttVariables.y1Rate}</td>
                      </tr>
                      <tr>
                        <td>Z</td>
                        <td>{posAttVariables.zPos}</td>
                        <td>{posAttVariables.zRate}</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>Att (d)</td>
                        <td>Rate (d/s)</td>
                      </tr>
                      <tr>
                        <td>R</td>
                        <td>{posAttVariables.rAtt}</td>
                        <td>{posAttVariables.rRate}</td>
                      </tr>
                      <tr>
                        <td>P</td>
                        <td>{posAttVariables.pAtt}</td>
                        <td>{posAttVariables.pRate}</td>
                      </tr>
                      <tr>
                        <td>Y</td>
                        <td>{posAttVariables.yAtt}</td>
                        <td>{posAttVariables.y2Rate}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Propellant"
                category="Here is a subtitle for this table"
                hCenter
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                          <th>MMH</th>
                          <th>N2O4</th>
                          <th>N2O4</th>
                          <th>MMH</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-danger"><b>{propVariables.mmh_1}%</b></td>
                        <td className="text-success"><b>{propVariables.n204_1}%</b></td>
                        <td className="text-success"><b>{propVariables.n204_2}%</b></td>
                        <td className="text-danger"><b>{propVariables.mmh_2}%</b></td>
                      </tr>
                      <tr>
                        <td>{propVariables.mmh_1_Weight}kg</td>
                        <td>{propVariables.n204_1_Weight}kg</td>
                        <td>{propVariables.n204_2_Weight}kg</td>
                        <td>{propVariables.mmh_2_Weight}kg</td>
                      </tr>
                      <tr>
                        <td>Delta V: </td>
                        <td>{propVariables.deltaV} m/s</td>
                        <td>Delta w: </td>
                        <td>{propVariables.deltaW} d/s</td>
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
                title="Range Sensors"
                category="Here is a subtitle for this table"
                hCenter
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                          <th>Variable Name</th>
                          <th>Range (m)</th>
                          <th>Rate (m/s)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Forward</td>
                        <td>{rangeVariables.forwardRange}</td>
                        <td>{rangeVariables.forwardRate}</td>
                      </tr>
                      <tr>
                        <td>Down</td>
                        <td>{rangeVariables.downRange}</td>
                        <td>{rangeVariables.downRate}</td>
                      </tr>
                      <tr>
                        <td>Port</td>
                        <td>{rangeVariables.portRange}</td>
                        <td>{rangeVariables.portRate}</td>
                      </tr>
                      <tr>
                        <td>Starboard</td>
                        <td>{rangeVariables.starboardRange}</td>
                        <td>{rangeVariables.starboardRate}</td>
                      </tr>
                      <tr className="text-danger">
                        <td>Rng Fndr1</td>
                        <td>{rangeVariables.rngFndr1Range}</td>
                        <td>{rangeVariables.rngFndr1Rate}</td>
                      </tr>
                      <tr className="text-danger">
                        <td>Rng Fndr2</td>
                        <td>{rangeVariables.rngFndr2Range}</td>
                        <td>{rangeVariables.rngFndr2Rate}</td>
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

export default MPCV;
