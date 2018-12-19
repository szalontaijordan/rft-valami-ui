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

  error: boolean;

  ngOnInit() {
  }

  login(model: any) {
    const { userName, password } = model;

    this.userService.authenticate(userName, password).subscribe({
      next: data => {
        this.userService.authToken = data['access_token'];
        this.userService.getCurrentUser(userName.toLowerCase()).subscribe(user => {
          this.router.navigate(['dashboard']);
        });
      },
      error: err => {
        this.error = true;
      }
    });
  }
}
