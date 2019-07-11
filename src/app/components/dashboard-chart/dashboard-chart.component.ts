import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
// import {scaleLinear} from "d3-scale";
@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.constructD3Chart();
  }

  constructD3Chart() {
    var data = [{ "name": "Dev", "value": 53 }, { "name": "PO", "value": 15 }, { "name": "QA", "value": 32 }];

    var margin = { top: 10, right: 10, bottom: 30, left: 10 },
      width = 200 - margin.left - margin.right,
      height = 150 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis()
      .scale(x);
    // .orient("bottom");

    var svg = d3.select("#dashboard_chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    x.domain(data.map(function (d) { return d.name; }));
    y.domain([0, d3.max(data, function (d) { return d.value; })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "1em")
      .attr("dy", "1em");

    svg.selectAll("bar")
      .data(data)
      .enter().append("rect")
      .style("fill", "#525")
      .attr("x", function (d) { return 5 + x(d.name); })
      .attr("width", "20%")//x.rangeBand())
      .attr("y", function (d) { return y(d.value); })
      .attr("height", function (d) { return height - y(d.value); });

    svg.selectAll("bar")
      .data(data)
      .enter().append("text")
      .attr('x', function (d) { return 25 + x(d.name); })
      .attr('y', height - 10)
      .attr('text-anchor', 'middle')
      .attr("class", "label")
      .text('21%');
  }

}
