/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import 'materialize-css';
import TableItem from '../../Components/MaterialTable/TableItem/TableItem';
import { monthlyLabo, weeklyLabo, currentLabo } from '../../util/ApiAddresses';
import { columns } from '../../util/Columns';
import ButtonItem from '../../Components/Buttons/ButtonItem/ButtonItem';


class Labo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      laboInfo: [],
    };
  }

  componentDidMount() {
    this.currentFetch();
  }


  monthlyFetch = () => {
    fetch(monthlyLabo).then((res) => {
      return res.json();
    }).then((data) => {
      const monthlyData = [];

      for (let i = 0; i < data.length; i++) {
        monthlyData.push({
          _id: data[i]._id,
          createdAt: data[i].createdAt,
          waterLevel: data[i].waterLevel.$numberDecimal.toString(),
        });
      }
      console.log(monthlyData);

      this.setState({
        laboInfo: monthlyData,
      });
    });
  }

  // fetches weekly data from the database
  weeklyFetch = () => {
    fetch(weeklyLabo).then(res => {
      return res.json()
    }).then(data => {
      const weekly = []

      for (let i = 0; i < data.length; i++) {
        weekly.push({
          _id: data[i]._id,
          createdAt: data[i].createdAt,
          waterLevel: data[i].waterLevel.$numberDecimal.toString(),
        })
      }
      console.log(weekly);

      this.setState({
        laboInfo: weekly
      })
    })
  }

  // fetches current data from the database
  currentFetch = () => {
    fetch(currentLabo).then(res => {
      return res.json()
    }).then(data => {
      const daily = []

      for (let i = 0; i < data.length; i++) {
        daily.push({
          _id: data[i]._id,
          createdAt: data[i].createdAt,
          waterLevel: data[i].waterLevel.$numberDecimal.toString(),
        })
      }
      console.log(daily);

      this.setState({
        laboInfo: daily
      })
    })
  }

  render() {
    const { laboInfo } = this.state;

    return (
      <div className="col s6 m3 l4 offset-s6" style={{ paddingLeft: '10px' }}>
        <div className="center-align">
          <ButtonItem buttonName="Current" onClick={this.currentFetch} />
          <ButtonItem buttonName="Past Week" onClick={this.weeklyFetch} />
          <ButtonItem buttonName="Past month" onClick={this.monthlyFetch} className="btn" />
        </div>
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
