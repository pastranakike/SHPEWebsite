import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { PopupService } from '../../popup.service';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.css']
})
export class LandingNavbarComponent implements OnInit {
  private user = null;

  constructor(private auth: AuthService, private popup: PopupService) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
  }

  logout() {
    this.auth.logout();
  }

  showPopup() {
    this.popup.setPopupVisibility(true);
  }

}
