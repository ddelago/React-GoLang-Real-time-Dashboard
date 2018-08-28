import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Socket from "variables/Sockets.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trickVarMap: {},
      seconds: 0,
      varListReceived: false
    };

    this.socket = new Socket();
    
    this.onSubmit = this.onSubmit.bind(this);
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  // Create new channelName and adds to channels array
  onSubmit(e){
    var trickAddress = this.inputAddress.value + ":" + this.inputPort.value
    console.log(trickAddress);

    // Clear out textbox
    this.inputAddress.value = ""
    this.inputPort.value = ""

    this.socket.sendMessage("trickServer", trickAddress);
    e.preventDefault();
  }

  tick() {
    // Change of state forces re-render
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));

    if (this.socket.websocket.readyState === 1) {
      // console.log("Socket is ready")
      this.socket.sendMessage("activePanel", "dashboard");
    } 
  }

  componentDidMount() {
    // Request list of variables at this time interval
    this.interval = setInterval(() => this.tick(), 150);

    this.socket.websocket.onopen = evt => { 
      this.socket.sendMessage("activePanel", "dashboard");
    }

    this.socket.websocket.onmessage = evt => { 
      this.socket.varReceived(evt, "dashboard");
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
    var dashboardVariables = {}
    // Check if valid message received
    if (this.socket.websocket.readyState === 1 && this.state.varListReceived === true && this.state.trickVarMap.length !== 0 
      && typeof this.state.trickVarMap["panel"] !== 'undefined' && this.state.trickVarMap["panel"].value === "dashboard") {
      dashboardVariables = {
        trickServer: this.state.trickVarMap["trickServer"].value
      }
    }
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6} mdOffset={3}>
              <Card
                title="Trick Server Address"
                category={dashboardVariables.trickServer}
                hCenter
                content={
                  <form>    
                    <Row>
                      <div className="col-md-7">                
                        <FormGroup>
                          <ControlLabel>Address</ControlLabel>
                          <FormControl
                            className="set-width-form"
                            inputRef={ref => { this.inputAddress = ref; }}
                            type="text"
                            placeholder="192.168.1.101"
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-5">
                        <FormGroup>
                          <ControlLabel>Port</ControlLabel>
                          <FormControl
                            className="set-width-form"
                            inputRef={ref => { this.inputPort = ref; }}
                            type="text"
                            placeholder="17000"
                          /> 
                        </FormGroup>  
                      </div>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit" onClick={this.onSubmit}>
                      Submit
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Variable"
                statsValue="Value"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Variable"
                statsValue="Value"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last  a day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Variable"
                statsValue="Value"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Variable"
                statsValue="Value"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Example Graph"
                category="Here is a subtitle for this table"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Example Statistics"
                category="Here is a subtitle for this table"
                stats="Updated 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="Example Bar Graph"
                category="Here is a subtitle for this table"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Example Task Card"
                category="Here is a subtitle for this table"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
