import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  chart: any;

  // chart type
  @Input() type = 'horizontalBar';
  // each bar
  @Input() labels = [];
  // actual data for each label
  @Input() data = [];
  // tooltip when hovering over a bar
  @Input() dataLabel = '';
  // background color for each bar
  @Input() dataBackgroundColor = [];
  // title for chart
  @Input() title = 'TestTitle';

  // flags for beginning at zero
  @Input() beginAtZeroY = true;
  @Input() beginAtZeroX = true;


  // test
  @Input() rawTestData = [
    {label: 'Africa', value: 2478},
    {label: 'Asian', value: 5267},
    {label: 'Europe', value: 734},
    {label: 'Latin America', value: 784},
    {label: 'North America', value: 433},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  /*
  * Plot actual chart
  */
  plotChart() {
    this.chart = new Chart(document.getElementById("bar-chart"), {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.dataLabel,
            backgroundColor: this.dataBackgroundColor,
            data: this.data,
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: this.title
        },
        scales: {
    yAxes: [{
      ticks: {
        beginAtZero: this.beginAtZeroY,
      },
    }],
    xAxes: [{
      ticks: {
        beginAtZero: this.beginAtZeroX,
      }
    }]
}
      }
    });
  }


  /*
  * Simple data processor to generate simple bar chart that can be used instead of Input
  */
  processChartData(chartData?: any[]) {
    this.data = [];
    this.labels =[];

    const data = chartData ? chartData : this.rawTestData;
    for (const o of data) {;
      this.labels.push(o.label);
      this.data.push(o.value);
      this.dataBackgroundColor.push(this.generateRandomColor());
    }
    console.log(this.labels);
    console.log(this.data);
  
    this.plotChart();
  }

  /*
  * Can create random color generator here
  */
  generateRandomColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return String('#' + randomColor);
  }


}


