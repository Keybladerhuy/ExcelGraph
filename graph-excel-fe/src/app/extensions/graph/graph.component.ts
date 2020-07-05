import { Component, OnInit } from '@angular/core';
import { GraphService } from './graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor(
    public graphService: GraphService
  ) { }

  ngOnInit(): void {
    console.log('Hello Graph Component');
  }

  test() {
    this.graphService.getGraphInfo().subscribe(
      res => {
        console.log('Testing Response');
        console.log(res);
      },
      err => {
        console.log('err', err);
      }
    );
  }

}
