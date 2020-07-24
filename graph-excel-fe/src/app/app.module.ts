// Core Angular 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { SharedModule } from './shared/shared.module';
import { InformaticsModule } from './extensions/informatics/informatics.module';
import { StatisticsModule } from './extensions/statistics/statistics.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    InformaticsModule,
    StatisticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
