import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatCardModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DeviceTableComponent } from './components/device-table/device-table.component';
import { bootstrap } from 'bootstrap/dist/js/bootstrap.min.js';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardCardComponent,
    DeviceTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
