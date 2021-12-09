import { Component } from '@angular/core';
import { Admin } from './model/admin';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adminC:Admin=new Admin;
  admin:Admin[]=[];
  title = 'Projet';
  Test(){
 
    for(let a of this.admin){
      this.adminC.id=a.id;
      this.adminC.pseudo=a.pseudo;
      this.adminC.mdp=a.mdp;
      this.adminC.connecte=false;
      this.adminService.modifier(this.adminC.id,this.adminC ).subscribe();
    

    }
 
  }
  constructor(private adminService:AdminService ) { 
    
  }
  ngOnInit(): void {
    this.adminService.getAdmin().subscribe(data=>{this.admin=data; 
    this.Test();
    });

   
  }
}
