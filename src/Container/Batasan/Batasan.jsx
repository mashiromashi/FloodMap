import React, { Component } from "react";
import "materialize-css";
import TableItem from "../../Components/MaterialTable/TableItem/TableItem";
import { monthlyBatasan, weeklyBatasan, currentBatasan } from "../../util/ApiAddresses";
import { columns } from "../../util/Columns";
import ButtonItem from "../../Components/Buttons/ButtonItem/ButtonItem";

class Batasan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      batasanInfo: [],
    };
  }

  componentDidMount() {
    this.currentFetch();
  }

  // fetches monthly data from the database
  monthlyFetch = () => {
    fetch(monthlyBatasan).then(res => {
      return res.json()
    }).then(data => {
      const monthlyData = []

      for (let i = 0; i < data.length; i++) {
        monthlyData.push({
          _id: data[i]._id,
          createdAt: data[i].createdAt,
          waterLevel: data[i].waterLevel.$numberDecimal.toString(),
        })
      }
      this.setState({
        batasanInfo: monthlyData
      })
    })
  }

  // fetches weekly data from the database
  weeklyFetch = () => {
    fetch(weeklyBatasan).then(res => {
      return res.json()
    }).then(
      data => {
        const weekly = []

        for (let i = 0; i < data.length; i++) {
          weekly.push({
            _id: data[i]._id,
            createdAt: data[i].createdAt,
            waterLevel: data[i].waterLevel.$numberDecimal.toString(),
          })
        }
        this.setState({
          batasanInfo: weekly
        })
      }
    )
  }

  // fetches today's data from the database
  currentFetch = () => {
    fetch(currentBatasan).then(res => {
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
        batasanInfo: daily
      })
    })
  }


  render() {
    const { batasanInfo } = this.state
    return (
      <div
        className="col s6 m3 l4 batasan"
        style={{
          paddingLeft: "10px",
          // paddingTop: "10px",
          paddingRight: "10px"
        }}
      >
        <div className="center-align">
          <ButtonItem buttonName="Current" onClick={this.currentFetch} />
          <ButtonItem buttonName="Past Week" onClick={this.weeklyFetch} />
          <ButtonItem buttonName="Past month" onClick={this.monthlyFetch} className="btn" />
        </div>
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
