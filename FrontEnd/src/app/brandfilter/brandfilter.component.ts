import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-brandfilter',
  templateUrl: './brandfilter.component.html',
  styleUrls: ['./brandfilter.component.css']
})



@Injectable()
export class BrandfilterComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router) { }

  param:any;

  list:any=[];

  public brand:String='';
  

//   transform( array: Array<any>, filterField: string, filterValue: any ): Array<any> {
//     console.log(filterValue);
    
//     if (!array) return [];
//     return array.filter(item => item[filterField] == filterValue);
// }
  
  ngOnInit(): void {
    if(this.list==''){

    this.route.queryParams.subscribe((value:any)=>{
      console.log(value.brand);
      this.brand=value.brand;
    this.param=value.data;
    console.log(this.brand);
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

    },error=>{
      alert("No such product exists!")
    })
    })
  }
  }

}





