import { HttpClient } from '@angular/common/http';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  data={
    emailId:'',
    fName:'',
    lName:'',
    pwd:'',
    cpwd:''
  }
 
  constructor(private regn:RegistrationService,private http:HttpClient,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.data);
    let url="http://localhost:9090/auth/"+this.data.emailId;
    if((this.data.emailId!=null && this.data.fName!=null && this.data.lName!=null && this.data.pwd!=null && this.data.cpwd!=null)&&(this.data.emailId!='' && this.data.fName!='' && this.data.lName!='' && this.data.pwd!='' && this.data.cpwd!='')){
    if(this.data.pwd===this.data.cpwd) {

      this.http.get(url).subscribe(
        (user:any)=>{
          console.log(user);
          if(user==null){
            this.regn.addUser(this.data).subscribe(
              (response:any)=>{
                    console.log(response);
                    
                    window.location.href="/login";
                    this.snack.open("Registration Successful"," ");
                  },error=>{
                    console.log(error);
                      
                  }
            )
          }else
          alert("User already exists");
          
        }
      )


    }
    else
    alert("passwords are not same");
  }else
  alert("fields can't be empty!");

  }

}
