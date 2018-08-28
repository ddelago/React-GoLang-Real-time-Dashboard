import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

class MyCam extends Component {
  render() {
    return (
      <Col md={this.props.size} mdOffset={this.props.offset}>
        <Card
          title={this.props.title}
          hCenter
          iframe
          content={
            <div className="intrinsic-container intrinsic-container-4x3">
              <img className="iframe-image" src={this.props.address}/>
            </div>
          }
        />
      </Col>
    );
  }
}

export default MyCam;
