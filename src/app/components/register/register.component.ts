import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../services/i18n/i18n.service';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public i18n: I18nService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  registerUser(newUser: any) {
    const { userName, fullName, password, email } = newUser;
    this.userService.upload(userName, password, fullName, email).subscribe({
      next: data => {
        this.router.navigate(['login']);
      },
      error: err => {
        // TODO
      }
    });
  }

}
