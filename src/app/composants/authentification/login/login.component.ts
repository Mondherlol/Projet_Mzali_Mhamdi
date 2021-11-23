import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar ) {}

  ngOnInit(): void {}
  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

 requestURL = '../assets/account/account.json';
   request = new XMLHttpRequest();



  connecter(ad: string, mdp: string) {
    if (!ad.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      this.openSnackBar('Format de mail inccorect.');
    }
      this.request.open('GET', this.requestURL);
      this.request.responseType = 'json';
      this.request.send();
      console.log(this.request.response);

    this.request.onload = function () {
     console.log(this.response);

      //console.log(this.response.indexOf(ad));
      let v=0;
      for (let i=0; i<this.response.length && v==0; i++){
        if (this.response[i].mail==ad) {
          console.log("Existe.");
          v=1;
            if(this.response[i].mdp==mdp){
              console.log("Mot de passe correct.");
              
            } else console.log("Mot de passe incorrect.");
        }else console.log("Mail inexistant.");
      }
    
    };

    console.log(ad + mdp);
  }
}
