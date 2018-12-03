import { Component, OnInit } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { NewsService } from 'src/app/services/news/news.service';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public i18n: I18nService,
              private news: NewsService,
              private userService: UserService,
              private router: Router) {
              }

  ngOnInit() {
    this.news.getNews();
  }

  enableHungarian() {
    this.i18n.locale = 'hu';
    this.i18n.subscription.next(this.i18n.locale);

  }

  enableEnglish() {
    this.i18n.locale = 'gb';
    this.i18n.subscription.next(this.i18n.locale);
  }

  logout() {
    this.userService.isLoggedIn = false;
    this.userService.currentUser = null;
    this.router.navigate(['login']);
  }

  get isRegisterScreen() {
    return window.location.href.endsWith('register');
  }

  get isLoginScreen() {
    return window.location.href.endsWith('login');
  }

  get isFeedbackScreen() {
    return window.location.href.endsWith('feedback');
  }

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  get locale() {
    return this.i18n.locale;
  }
}
