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
    const { username, firstName, lastName, password, email } = newUser;
    this.userService.upload(username, password, firstName, lastName, email).subscribe(data => {
      console.log(data);
      this.router.navigate(['login']);
    });
  }

}
