import { Component, OnInit, ViewChild } from '@angular/core';
import { SplitComponent, SplitAreaDirective } from 'angular-split';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('split', {static: false}) split: SplitComponent;
  @ViewChild('leftArea', {static: false}) leftArea: SplitAreaDirective;
  @ViewChild('rightArea', {static: false}) rightArea: SplitAreaDirective;

  direction: string = 'horizontal'
  sizes = {
    percent: {
      leftSize: 20,
      rightSize: 80,
    },
  }

  dragEnd(unit, { sizes }) {
    if (unit === 'percent') {
      this.sizes.percent.leftSize = sizes[0];
      this.sizes.percent.rightSize = sizes[1];
    }
  }
  
  switchActive(event: any) {
    event.target.classList.add('active');
  }

}
