// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 3rd Party Libraries
import { AngularSplitModule } from 'angular-split';
import { AgGridModule } from 'ag-grid-angular';

// Components
import { LayoutComponent } from './components/layout/layout.component';

// Services
import { APIService } from './services/api.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [ LayoutComponent, SidenavComponent ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSplitModule,
    AgGridModule.withComponents([null])
  ],
  exports: [ LayoutComponent, AgGridModule ],
  providers: [ APIService ]
})
export class SharedModule { }
