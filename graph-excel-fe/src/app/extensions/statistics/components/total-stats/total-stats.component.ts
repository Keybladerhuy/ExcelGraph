import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from '../../../../shared/services/api.service';
import * as _ from 'lodash';
import { BarChartComponent } from 'src/app/shared/components/chart/bar-chart/bar-chart.component';



@Component({
  selector: 'app-total-stats',
  templateUrl: './total-stats.component.html',
  styleUrls: ['./total-stats.component.scss']
})
export class TotalStatsComponent implements OnInit {

  @ViewChild(BarChartComponent) chart: BarChartComponent;

  showDataCount: number = 5;
  title = 'Highest Total Stats Pokemon';

  chartOptions = {
    label: 'pokemon',
    value: 'total'
  }

  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
    this.api.get('/api/get_rows').subscribe(res => {
      this.handleData(res);
    });
  }

  handleData(data) {
    console.log(data);
    const showDataCount = this.showDataCount;
    const sorted = data.sort((a, b) => (a.total > b.total) ? -1 : 1).slice(0, showDataCount);

    const pick = Object.values(this.chartOptions);
    console.log(pick);
    var result = _.map(sorted, o => _.pick(o, pick))
    console.log(result);

    const chartData = result.map(x => {
      return {
        label: x[this.chartOptions.label],
        value: x[this.chartOptions.value],
      }
    });
    console.log(chartData);

    this.chart.processChartData(chartData);
  }

}
