import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private appcomponent : AppComponent) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {      
      if(result == true){        
        this.invalidLogin = false;
        this.loginSuccess = true;    
        this.appcomponent.setLogin(this.loginSuccess);    
        this.router.navigate(['/dashboard']);
      }else {        
        this.invalidLogin = true;
        this.loginSuccess = false;
        this.successMessage = 'Login Failed.';
        this.appcomponent.setLogin(this.loginSuccess);
        this.router.navigate(['/hello-world']);
      }
     
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
  setLoginSuccess(loginSuccess){
    this.loginSuccess = loginSuccess;
  }
}
