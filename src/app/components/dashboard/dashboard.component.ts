import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser = {
    role: 'ADMIN',
    userName: 'szalontaijordan',
    fullName: 'Szalontai Jordán',
    email: 'jordanlt1111@gmail.com'
  };

  constructor(private userService: UserService,
              private logger: LoggerService,
              private i18n: I18nService) {
  }

  ngOnInit() {
    this.logger.log(this.i18n.header['login']);
  }

  deleteUser() {
    this.userService.isLoggedIn = false;
    console.log('loggin out...');
  }

}
