import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 
  constructor(private route:ActivatedRoute,private http:HttpClient,private snack:MatSnackBar) { }
  param:any;
  pincode={
    pin:''
  };
  list:any=[];
  
  ngOnInit(): void {

    this.route.queryParams.subscribe((value:any)=>{
      console.log(value);
      
    this.param=value;

    let url="http://localhost:9090/product/"+this.param.code;
    console.log(this.param.code);
    this.http.get(url).subscribe((response)=>{
      console.log(response);
      if(response==null){
      alert("No such product exists!")
      window.location.href="/dashboard";
      }
      this.list.push(response);
      console.log('hello'+Object.entries(this.list)[0][1]);
      this.list=Object.entries(this.list)[0][1];

    },error=>{
      alert("No such product exists!")
    })
    })
  }

  openSnackBar(){

    console.log(this.pincode.pin);
    let url="http://localhost:9090/ship/"+this.pincode.pin;
    this.http.get(url).subscribe((response)=>{
      if(response==null) this.snack.open("Not deliverable","ok");
      else{
      console.log(Object.entries(response)[1][1]+" "+Object.entries(response)[2][1]);
     
      this.snack.open(Object.entries(response)[1][1]+" "+Object.entries(response)[2][1],'OK');}
    },error=>{
      this.snack.open("Not deliverable","ok");
    }
    )


    

  }

}
