import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DatabaseService } from "./database.service";
import { DownDetailComponent } from './down-detail/down-detail.component'; 
import { AppRoutingModule } from './app-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SummaryComponent },
  { path: 'downdetail', component: DownDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DownDetailComponent,
    SummaryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
