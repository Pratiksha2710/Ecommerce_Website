import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name ="Pratiksha";

  isLoggedId:boolean=true;

  login(){
    this.isLoggedId = true;
  }
  logout(){
    this.isLoggedId = false;
  }
}
