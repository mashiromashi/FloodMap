/* eslint-disable react/no-unused-state */
// "value" not being used

import React, { Component } from 'react';
import 'materialize-css';
import TableItem from '../../Components/MaterialTable/TableItem/TableItem';
import { MonthlyBatasan, getAllBatasan } from '../../util/ApiAddresses';
import { columns } from '../../util/Columns';

class Batasan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      batasanInfo: [],
    };

    this._handleSelectChange = this._handleSelectChange.bind(this);
    this.apiFetch = this.apiFetch.bind(this);
  }


  componentDidMount() {
    this.apiFetch();
  }

  apiFetch = () => {
    fetch(getAllBatasan)
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        const batasan = [];

        for (let i = 0; i < data.length; i++) {
          batasan.push({
            _id: data[i]._id,
            createdAt: data[i].createdAt,
            waterLevel: data[i].waterLevel.$numberDecimal.toString(),
          });
        }
        this.setState({
          batasanInfo: batasan,
        });
      });
  };

  /**
   *
   * @deprecated doesn't seem to be used, can be removed
   */
  monthlyfetch = () => {
    fetch(MonthlyBatasan).then((res) => {
      res.json();
    }).then((data) => {
      const monthlyData = [];

      for (let i = 0; i < data.length; i++) {
        monthlyData.push({
          _id: data[i]._id,
          createdAt: data[i].createdAt,
          waterLevel: data[i].waterLevel.$numberDecimal.toString(),
        });
      }
      this.setState({
        batasanInfo: monthlyData,
      });
    });
  }

  _handleSelectChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { batasanInfo } = this.state;
    return (
      <div
        className="col s6 m3 l4 batasan"
        style={{
          paddingLeft: '10px',
          // paddingTop: "10px",
          paddingRight: '10px',
        }}
      >
        <div className="input-field selected" />
        <TableItem
          columns={columns}
          data={batasanInfo}
          title="Batasan Sensor"
        />
      </div>
    );
  }
}

export default Batasan;
