import { Component, OnInit } from '@angular/core';
import { I18nService } from 'src/app/services/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public i18n: I18nService) { }

  ngOnInit() {
  }

  enableHungarian() {
    this.i18n.locale = 'hun';
  }

  enableEnglish() {
    this.i18n.locale = 'eng';
  }

  get isRegisterScreen() {
    return window.location.href.endsWith('register');
  }

  get isLoginScreen() {
    return window.location.href.endsWith('login');
  }

  get isLoggedIn() {
    return !(this.isLoginScreen || this.isRegisterScreen);
  }

  get locale() {
    return this.i18n.locale;
  }
}
