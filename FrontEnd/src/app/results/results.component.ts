import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpClient) { }
  param:any;

  list:any=[];
  
  ngOnInit(): void {

    this.route.queryParams.subscribe((value:any)=>{
      console.log(value);
      
    this.param=value.data;

    let url="http://localhost:9090/product/"+this.param;
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

    },error=>{
      alert("No such product exists!")
    })
    })
  }

}
