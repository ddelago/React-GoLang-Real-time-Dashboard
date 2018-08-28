import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

class MyTable extends Component {
  render() {

    var tableData = [];
    var varList = this.props.data

    // Check if valid message received
    if(typeof varList !== 'undefined'){
      Object.keys(varList).map(function (keyName) {
        tableData.push(
            <tr>
              <td>{keyName}</td>
              <td>{varList[keyName]}</td>
            </tr>
          );
      })
    }

    return (
      <Col md={6} mdOffset={3}>
        <Card
          title={this.props.title}
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
                {tableData}
              </tbody>
            </Table>
          }
        />
      </Col>
    );
  }
}

export default MyTable;
