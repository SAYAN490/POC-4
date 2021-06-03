// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  url = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  generateToken(credentials) {
    return this.http.post(`${this.url}`,credentials,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getUsername() {
    return localStorage.getItem("username");
  }

  loginUser(token,username,roles) {
    localStorage.setItem("token",token)
    localStorage.setItem("username",username)

    var roles_list="";
    for(let i = 0;i<roles.length;i++){
      roles_list = roles_list  + roles[i];
    }
    console.log(roles_list)
    localStorage.setItem("roles",roles_list)
    return true;
  }

   login(credentials) { 
   return this.http.post('/user', 
      JSON.stringify(credentials))
      // .map(response=>{
      //  console.log(response.json);
      // })
      ;
   }

  

  

  getLoggedInUserRoles(){
    var roles = ""
    roles = localStorage.getItem("roles")+"";
    // roles = roles +"" this "" is appended to avoid null value which comes if it is not present in local storage
    // console.log(roles)
    if(roles.includes("ROLE_ADMIN")){
      // console.log("yes it contains role_admin")
      return true;
    }
    return false;
  }
}
