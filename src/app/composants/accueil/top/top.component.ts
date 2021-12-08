import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  adminC:Admin=new Admin;
  admin:Admin[]=[];
  motcle:string="";
  rechercher(r:string){
    console.log(r);
    this.motcle=r;
  }
  isAdmin(){
    for (let a of this.admin){
      if (a.connecte){
        return true;
      }
    }
    return false;
  }
  constructor(private adminService:AdminService ) { 
    
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
  }
  Test(){
    console.log(this.admin);
    for(let a of this.admin){
      this.adminC.id=a.id;
      this.adminC.pseudo=a.pseudo;
      this.adminC.mdp=a.mdp;
      this.adminC.connecte=false;
      this.adminService.modifier(this.adminC.id,this.adminC ).subscribe(data => console.log(data));
      alert(this.adminC.connecte);
      console.log(this.adminC.connecte);
      console.log('test');

    }
    console.log('test');
  }
  ngOnInit(): void {
    this.adminService.getAdmin().subscribe(data=>this.admin=data);
this.Test();
   
  }

}
