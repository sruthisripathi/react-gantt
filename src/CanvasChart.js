import React, { Component } from 'react';
import { CanvasJSChart } from './ReactCanvas'; 

class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataPoints: []
    }
  }

  componentDidMount() {
    let flags = [];
    let data = this.props.data;
    let l = data.length;
    let output = {};
    let count = 0;
    for(let i = 0; i < l; i++) {
      if(flags[data[i].xlabel]) continue;
      count = count + 1;
      flags[data[i].xlabel] = true;
      output[data[i].xlabel] = count*10;
    }

    let points = this.props.data.map((p, i) => {
      return {
        x: output[p.xlabel],
        y: p.y,
        label: p.xlabel,
        color: this.props.colors[p.clabel]      
      }
    });

    this.setState({
      dataPoints: points
    });
  }

  renderLegend() {
    let labels = [];
    for(let legend in this.props.colors) {
      labels.push(
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'space-between'}}>
          <div style={{
            width: '15px',
            height: '15px',
            backgroundColor: this.props.colors[legend]
          }}></div> {legend}
        </div>
      )
    }
    return labels;
  }

  render() {
		const options = {
			animationEnabled: true,
			title:{
				text: this.props.title
			},
			axisY: {
        interval: 1,
        includeZero: false,
        minimum: 0,
        maximum: 12
			},
			data: [{
        type: "rangeBar",
				dataPoints: this.state.dataPoints
			}]
		}
		return (
		<div style={{ margin: '30px' }}>
			<CanvasJSChart options = {options}
				// onRef={ref => this.chart = ref}
			/>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        {this.renderLegend()}        
      </div>
		</div>
		);
	}
}

export default Chart;