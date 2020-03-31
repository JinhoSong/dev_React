import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.css";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "기본값",
    position: "right",
    maintainAspectRatio: false,
    responsive: false
  };
  render() {
    return (
      <div className="container">
        <div className="chart">
          <Doughnut
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: this.props.location,
                fontSize: 25,
                cutoutPercentage: 60
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>
        <button className="btn btn-default">Click Me</button>
      </div>
    );
  }
}
export default Chart;
