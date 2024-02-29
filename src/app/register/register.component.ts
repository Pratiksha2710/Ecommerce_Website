import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formData = {
    fullname: '',
    email: '',
    password: '',
    phoneno: '',
    birthdate: '',
    address: ''
  };
  submitted = false;
  submitForm() {
    // Set submitted flag to true
    this.submitted = true;

}
products:any = ['Wide Leg Pant','Solid Kurta','Collot Full Dress','Kurta Plazo Set','Printed Kurta','Half Suit','Fancy Dress']
isvalid = true;
onchange(val:any){
  this.isvalid = val;
}
constructor(private router: Router) {}
submit(){
  this.router.navigate(['/home']); 
}
}
