import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { InformaticsComponent } from './informatics.component';
import { BaseStatsComponent } from './components/base-stats/base-stats.component';
import { RoleComponent } from './components/role/role.component';
import { MovesComponent } from './components/moves/moves.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';

const routes: Routes = [
  {
    path: 'Informatics',
    component: InformaticsComponent,
    data: {
      title: 'Informatics'
    },
    children: [
        { path: 'BaseStats', component: BaseStatsComponent },
        { path: 'Moves', component: MovesComponent },
        { path: 'Abilities', component: AbilitiesComponent },
        { path: 'Role', component: RoleComponent },
    ]
  }
]

@NgModule({
  declarations: [BaseStatsComponent, InformaticsComponent, RoleComponent, MovesComponent, AbilitiesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  // exports: [BaseStatsComponent, DataAnalysisComponent], 
  // providers: []
})
export class InformaticsModule { }
