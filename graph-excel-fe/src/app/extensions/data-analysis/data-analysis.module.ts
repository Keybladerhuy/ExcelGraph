import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { DataAnalysisComponent } from './data-analysis.component';
import { BaseStatsComponent } from './components/base-stats/base-stats.component';

// Libraries


const routes: Routes = [
  {
    path: 'DataAnalysis',
    component: DataAnalysisComponent,
    data: {
      title: 'Data Analysis'
    },
    children: [
        // { path: '', pathMatch: 'full', component: BaseStatsComponent },
        { path: 'BaseStats', component: BaseStatsComponent },
    ]
  }
]

@NgModule({
  declarations: [BaseStatsComponent, DataAnalysisComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [BaseStatsComponent, DataAnalysisComponent], 
  // providers: []

})
export class DataAnalysisModule { }
