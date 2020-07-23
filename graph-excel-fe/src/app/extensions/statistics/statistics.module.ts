import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { StatisticsComponent } from './statistics.component';
import { TotalStatsComponent } from './components/total-stats/total-stats.component';

const routes: Routes = [
  {
    path: 'Statistics',
    component: StatisticsComponent,
    data: {
      title: 'Statistics'
    },
    children: [
      { path: 'TotalStats', component: TotalStatsComponent },
    ]
  }
]

@NgModule({
  declarations: [StatisticsComponent, TotalStatsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class StatisticsModule { }
