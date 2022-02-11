import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-page-demo';
  constructor(public authenticationService: AuthenticationService) { }
  logout(){
    this.authenticationService.logout();
  }
}
