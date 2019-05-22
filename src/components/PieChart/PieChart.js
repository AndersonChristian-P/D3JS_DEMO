import React, { Component } from "react"
import * as d3 from "d3"


class PieChart extends Component {
  constructor() {
    super()

    this.state = {
      data: [12, 5, 6, 4, 9, 10]
    }
  }

  componentDidMount() {
    this.drawPieChart()
  }

  drawPieChart = () => {
    const data = this.state.data

    const w = 300
    const h = 300
    const margin = 0

    const radius = Math.min(w, h) / 2 - margin

    const svg = d3.select("body").append("svg").attr("width", w).attr("height", h).attr("class", "pie").append("g").attr("transform", "translate(" + w / 2 + "," + h / 2 + ")")

    var color = d3.scaleOrdinal()
      .domain(data)
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

    var pie = d3.pie()
      .value(function (d) { return d.value; })
    var data_ready = pie(d3.entries(data))

    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
      )
      .attr('fill', function (d) { return (color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)
  }

  render() {

    return (
      <div>

      </div>
    )
  }
}

export default PieChart