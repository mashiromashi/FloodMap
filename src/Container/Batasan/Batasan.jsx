import React, { Component } from "react";
import "materialize-css";
import "./Batasan.css";
import apiAddress from "../../util/apiPath";
import MaterialTable from "material-table";
import moment from 'moment'
import monthArray from "../../util/month";

const inputMonth = monthArray[moment().month()]

const columns = [
  {
    title: "Water Level (mm)",
    field: "waterLevel"
  },
  {
    title: "Date and Time",
    field: "createdAt",
    defaultSort: "desc"
  }
];

class Batasan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      batasanInfo: []
    };

    this._handleSelectChange = this._handleSelectChange.bind(this);
    this.apiFetch = this.apiFetch.bind(this);
  }

  _handleSelectChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  apiFetch = () => {
    fetch(`${apiAddress}/batasan/getall`)
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(data => {
        let batasan = [];

        for (let i = 0; i < data.length; i++) {
          batasan.push({
            _id: data[i]._id,
            createdAt: data[i].createdAt,
            waterLevel: data[i].waterLevel.$numberDecimal.toString(),
          });
        }
        this.setState({
          batasanInfo: batasan
        });
      });
  };



  componentDidMount() {
    this.apiFetch();
  }

  render() {
    const { value, batasanInfo } = this.state;
    return (
      <div
        className="col s6 m3 l4 batasan"
        style={{
          paddingLeft: "10px",
          //paddingTop: "10px",
          paddingRight: "10px"
        }}
      >
        <div className="input-field selected">
          <select onChange={this._handleSelectChange} value={value}>
            <option defaultValue value="" disabled>
              Please Choose one
            </option>
            <option value="current">Current</option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
            <option value="pastYear">Past Year</option>
            <option value="pastAll">Past All</option>
          </select>
        </div>
        <MaterialTable
          columns={columns}
          data={batasanInfo}
          title="Batasan Sensor"
          options={{ search: false, pageSize: 5, pageSizeOptions: [5] }}
        />
      </div>
    );
  }
}

export default Batasan;
