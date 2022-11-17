import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9090/token";
  url2="http://localhost:9090/currentUser";
  url3="http://localhost:9090/all";

  constructor(private http:HttpClient) { }

  getCurrentUser(){
    return this.http.get(this.url2);
  }

  welcome(){
    return this.http.get(this.url3);
  }

  setUser(user:any){
    localStorage.setItem("user",user);
  }



 generateToken(credentials:any){
    return this.http.post(this.url,credentials);
  }


  loginUser(token:any){
    localStorage.setItem("token",token);
  }

  isLoggedin(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }
}
