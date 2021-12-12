import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  admin:Admin[];
  adminC:Admin = new Admin;
  connexion:boolean=false;
  constructor(private router:Router,private _snackBar: MatSnackBar,private adminService:AdminService ) {
  
  }
  // sarra
  // user= new User();
  // onLoggedin(){
  // console.log(this.user);
  //   }


  ngOnInit(): void {
    this.adminService.getAdmin().subscribe(data=>this.admin=data);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

 requestURL = '../assets/account/account.json';
   request = new XMLHttpRequest();

connecter ( ad:string, mdp:string){
  for (let a of this.admin){
    if (ad==(a.pseudo) && mdp== a.mdp){
      a.connecte=true;
      this.adminC.id=a.id;
      this.adminC.pseudo=a.pseudo;
      this.adminC.mdp=a.mdp;
      this.adminC.connecte=true;
      this.adminService.modifier(this.adminC.id,this.adminC ).subscribe(data => console.log(data));
      this.connexion=true;
      localStorage.setItem('isConnected','true');
      this.router.navigate(['/admin']);
    }
  }
 
    if (this.connexion==false){
      alert("Informations incorrectes");
    }
    
  
}

  // connecter(ad: string, mdp: string) {
  
  //   if (!ad.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
  //     this.openSnackBar('Format de mail inccorect.');
  //   }
  //     this.request.open('GET', this.requestURL);
  //     this.request.responseType = 'json';
  //     this.request.send();
  //     console.log(this.request.response);

  //   this.request.onload = function () {
  //    console.log(this.response);
     
  //     //console.log(this.response.indexOf(ad));
  //     let v=0;
  //     for (let i=0; i<this.response.length && v==0; i++){
  //       if (this.response[i].mail==ad) {
  //         console.log("Existe.");
  //         v=1;
  //           if(this.response[i].mdp==mdp){
  //             console.log("Mot de passe correct.");

  //           } else console.log("Mot de passe incorrect.");
  //       }else console.log("Mail inexistant.");
  //     }
    
  //   };

  //   console.log(ad + mdp);
  // }
 

}
