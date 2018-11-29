import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../services/i18n/i18n.service';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public i18n: I18nService,
              public userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login(model: any) {
    const { userName, password } = model;

    this.userService.isValid(userName, password).subscribe({
      next: data => {
        // TODO we might want to set some token here?
        this.userService.isLoggedIn = true;
        this.userService.currentUser = data;
        this.router.navigate(['dashboard']);
      }
    });
  }
}
