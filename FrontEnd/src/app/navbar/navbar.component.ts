import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public loggedIn=false;
  user=null;
  Today=new Date();

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {

    this.loggedIn=this.loginService.isLoggedin();
   this.loginService.getCurrentUser().subscribe(user=>
    {
      this.user=Object.entries(user)[1][1];
    });

  }

  logoutUser(){
    this.loginService.logout();
    location.reload();
  }

}
