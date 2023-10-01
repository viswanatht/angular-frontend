import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(   
    private logincomponent : LoginComponent,
    private appcomponent : AppComponent,
    ) {   }

  ngOnInit(): void {
    alert('comiing');
    this.logincomponent.setLoginSuccess(false);
    this.appcomponent.setLogin(false);
  }

}
