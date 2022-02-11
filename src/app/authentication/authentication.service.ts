import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from '../model/signindata';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated = false;
  
 constructor(private router : Router){}
 
  private readonly mokedUser = new  SignInData('usamakhalied@gmail.com' , 'Usama@123')
  authenticate(signinData: SignInData):boolean {
  if(this.checkCreadentials(signinData)){
this.isAuthenticated = true;
this.router.navigate(['home'])
return true
  }
  this.isAuthenticated = false 
  return false 
  }
private checkCreadentials(signinData : SignInData):boolean {
return this.checkEmail(signinData.getEmail()) && this.checkPassword(signinData.getPassword());
}
private checkEmail(email:string) : boolean{
return email ===this.mokedUser.getEmail();}
private checkPassword(password:string) : boolean{
  return password ===this.mokedUser.getPassword();}
logout(){
this.isAuthenticated = false;
this.router.navigate(['']);

}


}
