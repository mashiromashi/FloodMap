import React, { Component } from "react";
import apiAddress from "../../util/apiPath";
import "materialize-css";
import MaterialTable from "material-table";

const columns = [
  { title: "Water Level", field: "waterLevel" },
  { title: "Rain Level", field: "rainLevel" },
  { field: "createdAt" }
];

class Labo extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "", laboInfo: [], pageOfItems: [] };

    this._handleSelectChange = this._handleSelectChange.bind(this);
    this.apiFetch = this.apiFetch.bind(this);
    this._onChangePage = this._onChangePage.bind(this);
  }

  _handleSelectChange(e) {
    this.setState({ value: e.target.value });
    console.log(e.target.value);
  }
  _handleOnSelect(e) {}
  _onChangePage(pageOfItems) {
    //update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  apiFetch = () => {
    fetch(`${apiAddress}/labo/getall`)
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(data => {
        let labo = [];
        for (let i = 0; i < data.length; i++) {
          labo.push({
            _id: data[i]._id,
            createdAt: data[i].createdAt,
            waterLevel: data[i].waterLevel.$numberDecimal.toString(),
            rainLevel: data[i].rainLevel.$numberDecimal.toString()
          });
        }
        this.setState({ laboInfo: labo });
        console.log(this.state.laboInfo[0]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.apiFetch();
    var table_search = document.querySelectorAll(
      ".MTableToolbar-searchField-37"
    );
    for (var i = 0; i < table_search.length; i++) {
      table_search[i].style.display = "none";
    }
  }

  render() {
    const { value, laboInfo } = this.state;

    return (
      <div className="col s6 m3 l4 offset-s6" style={{ paddingLeft: "10px" }}>
        <div className="input-field selected">
          <select value={value} onChange={this._handleSelectChange}>
            <option defaultValue value="" disabled>
              Please Choose One
            </option>
            <option value="current">Current</option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
            <option value="pastYear">Past Year</option>
            <option value="pastAll">Past All</option>
          </select>
        </div>
        {/* <table>
          <thead>
            <tr>
              <th>Sapang Labo Sensor</th>
              <th>Batasan Bridge Sensor</th>
            </tr>
          </thead>
          <tbody>
            {laboInfo.map(water =>
              water.length === 5 ? (
                <tr>
                  <td key="labo">{water.laboSensor_level}</td>
                  <td key="batasan">{water.batasanSensor_level}</td>
                  <td>{water.createdAt}</td>
                </tr>
              ) : (
                ""
              )
            )}
          </tbody>
        </table> */}
        <MaterialTable columns={columns} data={laboInfo} title="Labo Sensor" />
      </div>
    );
  }
}

export default Labo;
