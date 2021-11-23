import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './composants/authentification/login/login.component';
import { SignupComponent } from './composants/authentification/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { FooterComponent } from './composants/accueil/footer/footer.component';
import { TopComponent } from './composants/accueil/top/top.component';
import { CarouselComponent } from './composants//accueil/carousel/carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ErrorComponent } from './composants/error/error.component';
import { ReservationComponent } from './composants/reservation/reservation.component';
import { ListeRegionsComponent } from './composants/accueil/liste-regions/liste-regions.component';
import { FeaturesComponent } from './composants/accueil/features/features.component';
import { RechercherComponent } from './composants/rechercher/rechercher.component';
import { AboutusComponent } from './composants/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AccueilComponent,
    FooterComponent,
    TopComponent,
    CarouselComponent,
    ReservationComponent,
    ListeRegionsComponent,
    FeaturesComponent,
    RechercherComponent,
    AboutusComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MDBBootstrapModule.forRoot(),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
