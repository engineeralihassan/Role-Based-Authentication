import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl:string='http://localhost:3000/user'

  constructor(private http:HttpClient) { }
  GetAll(){
    return this.http.get(this.apiUrl);
  }
  GetById(username:any,password:any){
    console.log(`${this.apiUrl}?name=${username}&password=${password}`);
    return this.http.get<any[]>(`${this.apiUrl}?name=${username}&password=${password}`);
  }
  registation(data:any){
    return this.http.post(this.apiUrl,data);
  }
  updateUser(id:any,data:any){
    return this.http.put(this.apiUrl+'/'+id,data);
  }
  GetloggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  GetUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
}
