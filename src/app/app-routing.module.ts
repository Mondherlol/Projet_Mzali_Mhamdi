import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./composants/authentification/login/login.component";
import {SignupComponent } from './composants/authentification/signup/signup.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ErrorComponent } from './composants/error/error.component';
import { ReservationComponent } from './composants/reservation/reservation.component';
import { RechercherComponent } from './composants/rechercher/rechercher.component';
import { AboutusComponent } from './composants/aboutus/aboutus.component';
import { AdminComponent } from './composants/admin/admin.component';
import { ListeRegionsComponent } from './composants/accueil/liste-regions/liste-regions.component';
import { ActivitesComponent } from './composants/decouvrir/activites/activites.component';
import { NourritureComponent } from './composants/decouvrir/nourriture/nourriture.component';
import { MeilleuresDestinationsComponent } from './composants/decouvrir/meilleures-destinations/meilleures-destinations.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'accueil', component: AccueilComponent },  
  { path : 'reservation', component : ReservationComponent },
  { path : 'rechercher', component : RechercherComponent},
  { path : 'rechercher/:motcle',component:RechercherComponent},
  {path : 'aboutus', component:AboutusComponent},
  {path : 'admin', component:AdminComponent},
  {path : 'Region',component:ListeRegionsComponent},
  {path:'reservation/:id',component:ReservationComponent},
  {path:'activites',component:ActivitesComponent},
  {path:'plats',component:NourritureComponent},
  {path:'meilleures-destinations',component:MeilleuresDestinationsComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

