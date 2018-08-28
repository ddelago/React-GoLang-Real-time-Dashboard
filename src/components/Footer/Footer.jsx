import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Link 1</a>
              </li>
              <li>
                <a href="#pablo">Link 2</a>
              </li>
              <li>
                <a href="#pablo">Link 3</a>
              </li>
              <li>
                <a href="#pablo">Link 4</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://er.jsc.nasa.gov/ER7/">NASA Johnson Space Center | Simulation and Graphics</a>
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
