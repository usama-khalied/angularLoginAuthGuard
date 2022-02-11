import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


import { AuthenticationService } from '../authentication/authentication.service';
import { SignInData } from '../model/signindata';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string = ''
password: string =''
isFormValid = false;
areCreadintelValid = false;
  constructor(private authentication : AuthenticationService) { 
    
  }

  ngOnInit(): void {


  }

  onSubmit(signinForm : NgForm){
    if(!signinForm.valid){
      this.isFormValid = true;
      this.areCreadintelValid = false;
      return;
    }
this.checkCreadintials(signinForm);
}

private checkCreadintials(signinForm : NgForm ){
  const signInData = new SignInData(signinForm.value.email, signinForm.value.password);
if(!this.authentication.authenticate(signInData)){
  this.isFormValid = false;
  this.areCreadintelValid = true;

}




}

}




