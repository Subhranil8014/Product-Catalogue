import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private snack:MatSnackBar,private http:HttpClient) { }

  
  param={
    param:""
  };
  list:any=[];

  ngOnInit(): void {

    let url="http://localhost:9090/allProducts";
    console.log(this.param);
    this.http.get(url).subscribe((response)=>{
      console.log(response);
      if(response==null){
      alert("No such product exists!")
      window.location.href="";
      }
      this.list.push(response);
      console.log('hello'+Object.entries(this.list)[0][1]);
      this.list=Object.entries(this.list)[0][1];

    })
    
  }

  onSubmit(){
    console.log(this.param.param);
    
    this.router.navigate(['/results'],{queryParams:{data:this.param.param}});

  }
}
