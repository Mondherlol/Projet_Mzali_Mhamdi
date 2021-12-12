import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { ReservationComponent } from './composants/reservation/reservation.component';
import { ListeRegionsComponent } from './composants/accueil/liste-regions/liste-regions.component';
import { FeaturesComponent } from './composants/accueil/features/features.component';
import { RechercherComponent } from './composants/rechercher/rechercher.component';
import { AboutusComponent } from './composants/aboutus/aboutus.component';
import { MapComponent } from './composants/accueil/map/map.component';
import { AdminComponent } from './composants/admin/admin.component';
import { DecouvrirComponent } from './composants/accueil/decouvrir/decouvrir.component';
import { MeilleuresDestinationsComponent } from './composants/decouvrir/meilleures-destinations/meilleures-destinations.component';
import { NourritureComponent } from './composants/decouvrir/nourriture/nourriture.component';
import { ActivitesComponent } from './composants/decouvrir/activites/activites.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PrixDTPipe } from './prix-dt.pipe';
import { AddRegionComponent } from './composants/add-region/add-region.component';
import { RegionComponent } from './composants/region/region.component';
import { UpdateRegionComponent } from './composants/update-region/update-region.component';
import { ConditionsDUtilisationsComponent } from './composants/supplementaire/conditions-d-utilisations/conditions-d-utilisations.component';
import { PolitiqueComponent } from './composants/supplementaire/politique/politique.component';
import { StatistiqueComponent } from './composants/admin/statistique/statistique.component';
import { ListeReservationsComponent } from './composants/admin/liste-reservations/liste-reservations.component';





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
    MapComponent,
    AdminComponent,
    DecouvrirComponent,
    MeilleuresDestinationsComponent,
    NourritureComponent,
    ActivitesComponent,
    PrixDTPipe,
    AddRegionComponent,
    RegionComponent,
    UpdateRegionComponent,
    ConditionsDUtilisationsComponent,
    PolitiqueComponent,
    StatistiqueComponent,
    ListeReservationsComponent,

   

  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
