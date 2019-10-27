/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import 'materialize-css';
import TableItem from '../../Components/MaterialTable/TableItem/TableItem';
import { MonthlyLabo, getAllLabo } from '../../util/ApiAddresses';
import { columns } from '../../util/Columns';


class Labo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      laboInfo: [],
      monthlyData: [],
    };

    this._handleSelectChange = this._handleSelectChange.bind(this);
    this.apiFetch = this.apiFetch.bind(this);
    this._onChangePage = this._onChangePage.bind(this);
  }

  componentDidMount() {
    this.apiFetch();
  }

  monthlyfetch = () => {
    fetch(MonthlyLabo).then((res) => {
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
        monthlyData,
      });
    });
  }

  apiFetch = () => {
    fetch(getAllLabo)
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        const labo = [];
        for (let i = 0; i < data.length; i++) {
          labo.push({
            _id: data[i]._id,
            createdAt: data[i].createdAt,
            waterLevel: data[i].waterLevel.$numberDecimal.toString(),
          });
        }
        this.setState({ laboInfo: labo });
        // eslint-disable-next-line react/destructuring-assignment
        console.log(this.state.laboInfo[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  _handleSelectChange(e) {
    this.setState({ value: e.target.value });
  }

  // Not being used yet
  // _handleOnSelect(e) { }

  _onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems });
  }

  render() {
    const { laboInfo } = this.state;

    return (
      <div className="col s6 m3 l4 offset-s6" style={{ paddingLeft: '10px' }}>
        <div className="input-field selected" />
        <TableItem
          columns={columns}
          data={laboInfo}
          title="Labo Sensor"
        />
      </div>
    );
  }
}

export default Labo;
