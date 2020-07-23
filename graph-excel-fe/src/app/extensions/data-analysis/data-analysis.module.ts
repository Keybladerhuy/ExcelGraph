import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { DataAnalysisComponent } from './data-analysis.component';
import { BaseStatsComponent } from './components/base-stats/base-stats.component';
import { RoleComponent } from './components/role/role.component';

const routes: Routes = [
  {
    path: 'DataAnalysis',
    component: DataAnalysisComponent,
    data: {
      title: 'Data Analysis'
    },
    children: [
        { path: 'BaseStats', component: BaseStatsComponent },
        { path: 'Role', component: RoleComponent },
    ]
  }
]

@NgModule({
  declarations: [BaseStatsComponent, DataAnalysisComponent, RoleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  // exports: [BaseStatsComponent, DataAnalysisComponent], 
  // providers: []
})
export class DataAnalysisModule { }
