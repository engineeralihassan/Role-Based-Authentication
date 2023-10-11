import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
 
  constructor(private service:AuthService){
  }

  logoutUser(){
    sessionStorage.clear();
  }
  get login(): boolean {
    return this.service.GetloggedIn();
  }
}
