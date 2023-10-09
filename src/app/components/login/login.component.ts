import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup
  passwordVisible: boolean = false;
  user:any;
  message:any
  constructor(private formBuilder: FormBuilder, private toaster:ToastrService, private service:AuthService, private router:Router ,private titleService: Title) {
    this.loginForm = this.formBuilder.group({
      name: ['',Validators.required],
      password: ['',Validators.required],

    });
  }
  proceedLogin(){
    if(this.loginForm.valid){
     this.service.GetById(this.loginForm.value.name, this.loginForm.value.password).subscribe(data=>{
      console.log("Data is ",data[0]);
      this.user=data[0];
      console.log(this.user,"user feteched")

      if(this.user?.name){
        if(this.user?.isactive){
          sessionStorage.setItem('username',this.user?.id);
          sessionStorage.setItem('userrole',this.user?.role);
          this.toaster.success("Your Login is SuccessFull","Login Successfull");
          this.router.navigate(['home']);
        }else{
          this.toaster.error("Your registration is not approved by admin please contact admin for activation","Not Active user");
          this.router.navigate(['login']);
        }
   

      }else{
        console.log(this.loginForm?.value)
        this.toaster.error("Plaese enter valid credentials");
      }
   

     })
    }else{
      this.toaster.warning("Plaese fill all details");
    }
  }


  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
