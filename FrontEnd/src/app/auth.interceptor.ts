import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

//const TOKEN_HEADER='Authorization';
@Injectable({
    providedIn:'root'
})
export class AuthInterceptor implements HttpInterceptor{
   constructor(private login:LoginService){}
   
    intercept(
        req: HttpRequest<any>,
         next: HttpHandler
         ) {

        let authReq=req;
        let token=this.login.getToken();
        //console.log("inside interceptor");
        //console.log('intercept'+token);
        
        if(token!=null){
            console.log("hello auth");
            authReq=authReq.clone({
             //   console.log(token);
                setHeaders: { Authorization:`Bearer ${token}`}});

        }
 
    //    console.log(`Bearer ${token}`);
        
        return next.handle(authReq);

    }
    
}
