import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pricesort',
  templateUrl: './pricesort.component.html',
  styleUrls: ['./pricesort.component.css']
})
export class PricesortComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router) { }

  param:any;
  

  ulist:any=[];

  list:any=[];

  ngOnInit(): void {


    this.route.queryParams.subscribe((value:any)=>{
      console.log(value.brand);
    //  this.brand=value.brand;
    this.param=value.data;
   // console.log(this.brand);
    let url="http://localhost:9090/product/"+this.param;
    console.log(this.param);
    this.http.get(url).subscribe((response)=>{
      console.log(response);
      if(response==null){
      alert("No such product exists!")
      window.location.href="/dashboard";
      }
      this.list.push(response);
      console.log('hello'+Object.entries(this.list)[0][1]);
      this.list=Object.entries(this.list)[0][1];
      for(let i=0;i<this.list.length;i++){
        console.log(this.list[i].price);

        if(value.min<=this.list[i].price && value.max>=this.list[i].price){
         
        // console.log("hello");
        console.log(this.list[i].price);

        this.ulist.push(this.list[i]);
          
          
        }

      };
      console.log(this.ulist);
      

    },error=>{
      alert("No such product exists!")
    })
    })

  }

}
