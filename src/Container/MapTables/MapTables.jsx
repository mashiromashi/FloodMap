import React, { Component } from "react";
import "./MapTables.css";

class MapTables extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col s12 m6 l6 center-align">
        <div className="col s12 m6 l4">
          <table
            className="centered responsive-table"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Water Level</th>
                <th>Indicator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Something</td>
                <td>something</td>
              </tr>
              <tr>
                <td>something something</td>
                <td>somethin something</td>
              </tr>
              <tr>
                <td>something something</td>
                <td>somethin something</td>
              </tr>
              <tr>
                <td>something something</td>
                <td>somethin something</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="col s12 m6 l4 center-align"
          style={{ paddingTop: "50px" }}
        >
          <table className="centered responsive-table">
            <thead>
              <tr>
                <th>Rain Level</th>
                <th>Indicator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Something here</td>
                <td>I do not know </td>
              </tr>
              <tr>
                <td>Something here</td>
                <td>I do not know </td>
              </tr>
              <tr>
                <td>Something here</td>
                <td>I do not know </td>
              </tr>{" "}
              <tr>
                <td>Something here</td>
                <td>I do not know </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MapTables;
