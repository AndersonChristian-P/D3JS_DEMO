import React, { Component } from "react"
import * as d3 from "d3"

// https://alignedleft.com/tutorials/d3/ | D3 tutorial
// https://blog.logrocket.com/data-visualization-in-react-using-react-d3-c35835af16d0 | tutorial to create bar chart with React and D3
// https://www.d3-graph-gallery.com/

class BarChart extends Component {
  constructor() {
    super()

    this.state = {
      data: [12, 5, 6, 4, 9, 10]
    }
  }

  componentDidMount() {
    this.drawChart()
  }

  drawChart = () => {
    const data = this.state.data

    // decide on the size of the chart in pixels
    const w = 700
    const h = 300

    // tell D3 to create an empty SVG element and add it to the DOM - this creates an empty SVG element just before the closing </body> tag
    // SVG - Scalable Vector Graphics (xml-based vector graphics)
    const svg = d3.select("body").append("svg").attr("width", w).attr("height", h).style("margin-left", 100)

    // create rects and add them to svg | i corresponds to each value's location in the data set
    svg.selectAll("rect").data(data).enter().append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("class", "bar")

    svg.selectAll("text").data(data).enter().append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - (10 * d) - 3)
  }



  render() {

    return (
      <div>

      </div>
    )
  }
}

export default BarChart