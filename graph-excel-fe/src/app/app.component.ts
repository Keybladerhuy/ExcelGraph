import { Component, ViewChild } from '@angular/core';
import { SplitComponent, SplitAreaDirective } from 'angular-split';
// import { SplitService } from './shared/services/split.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    // public split: SplitService // Maybe turn into component
  ) { }

  title = 'graph-excel-fe';
}
