import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_regression from "@amcharts/amcharts4/plugins/regression";
class SunburstChart extends Component {
  // Themes end
  // create chart
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4plugins_sunburst.Sunburst);
    chart.padding(0, 0, 0, 0);
    chart.radius = am4core.percent(98);

    chart.data = [
      {
        name: "First",
        children: [
          { name: "A1", value: 100 },
          { name: "A2", value: 60 }
        ]
      },
      {
        name: "Second",
        children: [
          { name: "B1", value: 135 },
          { name: "B2", value: 98 }
        ]
      },
      {
        name: "Third",
        children: [
          {
            name: "C1",
            children: [
              { name: "EE1", value: 130 },
              { name: "EE2", value: 87 },
              { name: "EE3", value: 55 }
            ]
          },
          { name: "C2", value: 148 },
          {
            name: "C3",
            children: [
              { name: "CC1", value: 53 },
              { name: "CC2", value: 30 }
            ]
          },
          { name: "C4", value: 26 }
        ]
      },
      {
        name: "Fourth",
        children: [
          { name: "D1", value: 415 },
          { name: "D2", value: 148 },
          { name: "D3", value: 89 }
        ]
      },
      {
        name: "Fifth",
        children: [
          {
            name: "E1",
            children: [
              { name: "EE1", value: 33 },
              { name: "EE2", value: 40 },
              { name: "EE3", value: 89 }
            ]
          },
          {
            name: "E2",
            value: 148
          }
        ]
      }
    ];

    chart.colors.step = 2;
    chart.fontSize = 11;
    chart.innerRadius = am4core.percent(10);

    //차트 설정

    let level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
    level0SeriesTemplate.hiddenInLegend = false;
    chart.seriesTemplates.setKey("0", level0SeriesTemplate);

    // this makes labels to be hidden if they don't fit
    level0SeriesTemplate.labels.template.truncate = true;
    level0SeriesTemplate.labels.template.hideOversized = true;

    level0SeriesTemplate.labels.template.adapter.add("rotation", function(
      rotation,
      target
    ) {
      target.maxWidth =
        target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
      target.maxHeight = Math.abs(
        ((target.dataItem.slice.arc *
          (target.dataItem.slice.innerRadius + target.dataItem.slice.radius)) /
          2) *
          am4core.math.RADIANS
      );

      return rotation;
    });

    let level1SeriesTemplate = level0SeriesTemplate.clone();
    chart.seriesTemplates.setKey("1", level1SeriesTemplate);
    level1SeriesTemplate.fillOpacity = 0.75;
    level1SeriesTemplate.hiddenInLegend = true;

    let level2SeriesTemplate = level0SeriesTemplate.clone();
    chart.seriesTemplates.setKey("2", level2SeriesTemplate);
    level2SeriesTemplate.fillOpacity = 0.5;
    level2SeriesTemplate.hiddenInLegend = true;

    chart.legend = new am4charts.Legend();
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div>
        <p>SunburstChart </p>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      </div>
    );
  }
}
am4core.useTheme(am4themes_animated);
export default SunburstChart;
