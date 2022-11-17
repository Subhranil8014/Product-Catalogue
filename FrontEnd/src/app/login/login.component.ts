import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:"",
    password:''
  }

  constructor(private router:Router,private loginService:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.username!=null && this.credentials.password!=null)&&(this.credentials.username!='' && this.credentials.password!='')){
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log(response);
          this.loginService.loginUser(response.token);
          //this.router.navigateByUrl("/dashboard");
          this.loginService.getCurrentUser().subscribe(
            (user:any)=>{
              this.loginService.setUser(user);
              console.log('hello'+Object.entries(user)[1][1]);
              
            }
          )

          // this.loginService.welcome().subscribe(
          //   response=>{
              
          //     console.log(Object.entries(response)[1]);
              
          //   }
          // )
          this.snack.open("Sign in successful","ok");
          window.location.href="/dashboard";

        },error=>{
         // alert("user and password can't");
          this.snack.open("BAD CREDENTIALS","RETRY");

        }
      )
    }else{
      alert("user and password can't be empty");
    }

    // console.log("form is submitted");
    // this.router.navigateByUrl("/dashboard")
  }

  onClick(){
    this.router.navigateByUrl("/signup")
  }

}
