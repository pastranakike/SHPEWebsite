import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle().then((value) => {
      this.router.navigate(['/']);
    });
  }

  loginWithFacebook() {
    this.auth.loginWithFacebook().then((value) => {
      this.router.navigate(['/']);
    });
  }

}
