// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 3rd Party Libraries
import { AngularSplitModule } from 'angular-split';

// Components
import { LayoutComponent } from './components/layout/layout.component';

// Services
import { APIService } from './services/api.service';

@NgModule({
  declarations: [ LayoutComponent ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSplitModule
  ],
  exports: [ LayoutComponent ],
  providers: [ APIService ]
})
export class SharedModule { }
