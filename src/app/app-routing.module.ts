import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./composants/authentification/login/login.component";
import {SignupComponent } from './composants/authentification/signup/signup.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ErrorComponent } from './composants/error/error.component';
import { ReservationComponent } from './composants/reservation/reservation.component';
import { RechercherComponent } from './composants/rechercher/rechercher.component';
import { AboutusComponent } from './composants/aboutus/aboutus.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'accueil', component: AccueilComponent },  
  { path : 'reservation', component : ReservationComponent },
  { path : 'rechercher', component : RechercherComponent},
  { path : 'rechercher/:motcle',component:RechercherComponent},
  {path : 'aboutus', component:AboutusComponent},
  {path:'reservation/:id',component:ReservationComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

