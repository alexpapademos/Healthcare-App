import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PredictionComponent } from './pages/prediction/prediction.component';


@NgModule({
  declarations: [
    AppComponent,
    DiagnosisComponent,
    FooterComponent,
    HeaderComponent,
    AnalyticsComponent,
    HomePageComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
