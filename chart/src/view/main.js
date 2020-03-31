import Chart from "C:/dev_React/chart/src/components/chart";
import React, { Component } from "react";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }; //DataSet을 넣어주는 함수
  }

  componentWillMount() {
    this.getChartData();
  }
  //생명주기 관련된듯
  getChartData() {
    //Ajax calls here 여기서 데이터 불러서 넘기기?
    //원하는 이름으로 데이터 chartData 넣기 가능
    this.setState({
      chartData1: {
        labels: ["빕스", "야구", "뭐", "적을게 없네"],
        datasets: [
          {
            label: "test",
            data: [123456, 545768, 355542, 165576],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)"
            ]
          }
        ]
      },

      chartData2: {
        labels: ["a", "b", "c", "d"],
        datasets: [
          {
            label: "test",
            data: [617595, 181045, 153060, 95072],
            backgroundColor: ["Red", "Yellow", "Blue", "black"]
          }
        ]
      },
      chartData3: {
        labels: ["a", "b", "c", "d"],
        datasets: [
          {
            label: "test",
            data: [617595, 181045, 153060, 95072],
            backgroundColor: ["Red", "Yellow", "Blue", "black"]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div class="container">
        <div class="row my-3">
          <div class="col">
            <h4>Chart.js</h4>
          </div>
        </div>
        <div class="row py-2">
          <div class="col-md-4 py-1">
            <div class="card">
              <div class="card-body">
                <Chart
                  chartData={this.state.chartData1}
                  legendPosition="right"
                  location=" 권진호 "
                />
              </div>
            </div>
          </div>
          <div class="col-md-4 py-1">
            <div class="card">
              <div class="card-body">
                <Chart
                  chartData={this.state.chartData2}
                  legendPosition="right"
                  location=" 마우스 "
                />
              </div>
            </div>
          </div>
          <div class="col-md-4 py-1">
            <div class="card">
              <div class="card-body">
                <Chart
                  chartData={this.state.chartData3}
                  legendPosition="right"
                  location=" 송명석 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
