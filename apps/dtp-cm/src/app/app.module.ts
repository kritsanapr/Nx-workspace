import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingModule } from './routing/routing.module';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
