import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import moment from "moment";
import 'moment-timezone';
import './utils.js';
import './price-tracker.css';

const options = {
  responsive: true,
  title: {
    display: true,
    text: 'Chart.js Time Point Data'
  },
  scales: {
    xAxes: [{
      type: 'time',
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Date'
      },
      ticks: {
        major: {
          fontStyle: 'bold',
          fontColor: '#FF0000'
        }
      }
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'value'
      }
    }]
  }
}

class PriceTracker extends Component {
  constructor(props){
		super(props)

		this.state = {
      datasets: [{
        label: 'Dataset with string point data',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        data: [{
          x: this.newDateString(0),
          y: this.getRandomInt()
        }, {
          x: this.newDateString(2),
          y: this.getRandomInt()
        }, {
          x: this.newDateString(4),
          y: this.getRandomInt()
        }, {
          x: this.newDateString(5),
          y: this.getRandomInt()
        }],
      }, {
        label: 'Dataset with date object point data',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
        data: [{
          x: this.newDate(0),
          y: this.getRandomInt()
        }, {
          x: this.newDate(2),
          y: this.getRandomInt()
        }, {
          x: this.newDate(4),
          y: this.getRandomInt()
        }, {
          x: this.newDate(5),
          y: this.getRandomInt()
        }]
      }]
    }
    this.randomizeData = this.randomizeData.bind(this);
    this.addData = this.addData.bind(this);
    this.removeData = this.removeData.bind(this);
    this.newDate = this.newDate.bind(this);
    this.newDateString = this.newDateString.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
  }

  newDate(days) {
    return moment().add(days, 'd').toDate();
  }

  newDateString(days) {
    return moment().add(days, 'd').format();
  }

  getRandomInt() {
    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  }

  randomizeData(){
    console.log(this.state.datasets[0].data[0].y)
    this.state.datasets[0].data[0].y = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  }

  addData(){
    if (this.state.datasets.length > 0) {
      console.log("in add data");
      this.state.datasets[0].data.push({
        x: this.newDateString(5),
        y: this.getRandomInt()
      });
      this.state.datasets[1].data.push({
        x: this.newDate(5),
        y: this.getRandomInt()
      });

    }
  }

  removeData(){
    this.state.datasets.forEach(function(dataset) {
      dataset.data.pop();
    });
  }


  


  render() {
    
    return (
      <div>
        
        <Line data={this.state} width={901} height={450} options={options} redraw={true}/>
        <button onClick={this.randomizeData}>Randomize Data</button>
      
      <button onClick={this.addData}>Add Data</button>
      <button onClick={this.removeData}>Remove Data</button>
      </div>
    
      
    )

  }

}

export default PriceTracker;
 