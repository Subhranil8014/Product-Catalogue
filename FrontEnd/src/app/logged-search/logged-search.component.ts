import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logged-search',
  templateUrl: './logged-search.component.html',
  styleUrls: ['./logged-search.component.css']
})
export class LoggedSearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router) { }
  param:any;
  
 price={
   min:'',
   max:''
 };

  list:any=[];
  
  ngOnInit(): void {
    if(this.list==''){

    this.route.queryParams.subscribe((value:any)=>{
      console.log(value);
      
    this.param=value.data;

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

  onValChange(value:any) {
    
      this.router.navigate(
        ['/brand'],
        { queryParams: { data: this.param, brand: value } }
      );
    
}

onSubmit(){

  console.log(this.price);

  this.router.navigate(
    ['/price'],
    { queryParams: { data: this.param,min:this.price.min,max:this.price.max } }
  );
  

}

//   onClick(){
//     let url="http://localhost:9090/product/"+"adidas";
//     console.log(this.param);
//     this.http.get(url).subscribe((response)=>{
//       console.log(response);
//       if(response==null){
//       alert("No such product exists!")
//       window.location.href="/dashboard";
//       }
//       this.list.push(response);
//       console.log('hello'+Object.entries(this.list)[0][1]);
//       this.list=Object.entries(this.list)[0][1];
//       console.log('hello world');
//       this.router.navigateByUrl("/results");

//     })

// }
}
