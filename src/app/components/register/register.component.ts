import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm:FormGroup
  constructor(private formBuilder: FormBuilder, private toaster:ToastrService, private service:AuthService, private router:Router ,private titleService: Title) {
    this.registrationForm = this.formBuilder.group({
      id:[new Date(),[Validators.required,Validators.minLength(5)]],
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      gender: ['male'],
      isactive: [false,Validators.required],
      role: [''],
    });
    this.titleService.setTitle("Registration page ");
  }

  proceedRegistration(){
    console.log("Hello ali");
    if(this.registrationForm.valid){
     this.service.registation(this.registrationForm.value).subscribe(dat=>{
      this.toaster.success("Plaese contact with admin for approval","Registration Successfull");
      this.router.navigate(['login']);
      this.titleService.setTitle("G Ali Kam Bn gia jk na ho gai sub mit");

     })
    }else{
      console.log(this.registrationForm.value)
      this.toaster.warning("Plaese fill all the required fields");

    }
  }
  hide = true;
  get emailInput() { return this.registrationForm.get('email'); }
  get passwordInput() { return this.registrationForm.get('password'); }  
  password: string = '';
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
