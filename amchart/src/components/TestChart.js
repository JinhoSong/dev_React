import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_regression from "@amcharts/amcharts4/plugins/regression";
class TestChart extends Component {
  // Themes end
  // create chart
  componentDidMount() {
    var chart = am4core.create("chartdiv", am4plugins_sunburst.Sunburst);
    chart.padding(0, 0, 0, 0);
    chart.radius = am4core.percent(98);

    chart.data = [
      {
        name: "Occupied",
        children: [
          {
            name: "1",
            value: 10000
          },
          {
            name: "2",
            value: 16000
          },
          {
            name: "3",
            value: 26000
          },
          {
            name: "4",
            value: 25000
          },
          {
            name: "5",
            value: 14000
          },
          {
            name: "6",
            value: 6000
          }
        ]
      },
      {
        name: "Free",
        value: 80000
      }
    ];

    chart.colors.step = 2;
    chart.fontSize = 11;
    chart.innerRadius = am4core.percent(10);

    // define data fields
    chart.dataFields.value = "value";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";

    var level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
    level0SeriesTemplate.hiddenInLegend = false;
    chart.seriesTemplates.setKey("0", level0SeriesTemplate);

    // this makes labels to be hidden if they don't fit
    level0SeriesTemplate.labels.template.truncate = true;
    level0SeriesTemplate.labels.template.hideOversized = true;
    level0SeriesTemplate.slices.template.tooltipText = `{name}-{value.formatDuration("hh 'hours' & mm 'mins.'")}`;

    level0SeriesTemplate.labels.template.adapter.add(
      "rotation",
      (rotation, target) => {
        target.maxWidth =
          target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
        target.maxHeight = Math.abs(
          ((target.dataItem.slice.arc *
            (target.dataItem.slice.innerRadius +
              target.dataItem.slice.radius)) /
            2) *
            am4core.math.RADIANS
        );

        return rotation;
      }
    );

    var level1SeriesTemplate = level0SeriesTemplate.clone();
    chart.seriesTemplates.setKey("1", level1SeriesTemplate);
    level1SeriesTemplate.fillOpacity = 0.75;
    level1SeriesTemplate.hiddenInLegend = true;

    var level2SeriesTemplate = level0SeriesTemplate.clone();
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
        <p>2 </p>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      </div>
    );
  }
}
am4core.useTheme(am4themes_animated);
export default TestChart;
