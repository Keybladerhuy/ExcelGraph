// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 3rd Party Libraries
import { AngularSplitModule } from 'angular-split';
import { AgGridModule } from 'ag-grid-angular';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { BarChartComponent } from './components/chart/bar-chart/bar-chart.component';

// Services
import { APIService } from './services/api.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LineChartComponent } from './components/chart/line-chart/line-chart.component';



@NgModule({
  declarations: [ LayoutComponent, SidenavComponent, BarChartComponent, LineChartComponent ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSplitModule,
    AgGridModule.withComponents([null]),
  ],
  exports: [ LayoutComponent, AgGridModule, BarChartComponent ],
  providers: [ APIService ]
})
export class SharedModule { }
