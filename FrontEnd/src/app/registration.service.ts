import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url="http://localhost:9090/addUser";
  

  constructor(private http:HttpClient) { }

  addUser(data:any){
    return this.http.post(this.url,data);
  }
}
