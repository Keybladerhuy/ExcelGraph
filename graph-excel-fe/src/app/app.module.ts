// Core Angular 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


// 3rd Party Libraries
import { AngularSplitModule } from 'angular-split';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { GraphComponent } from './extensions/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularSplitModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
