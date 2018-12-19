import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser = {
    role: '',
    username: '',
    fullName: '',
    email: ''
  };

  allUsers: Array<any>;

  constructor(private userService: UserService,
              private logger: LoggerService,
              private i18n: I18nService,
              private router: Router) {
  }

  ngOnInit() {
    this.logger.log(this.i18n.header['login']);
    this.userService.currentUser.pipe(
      map(user => {
        if (user) {
          const { email, firstName, lastName, username, roles } = user;

          return {
            fullName: firstName + ' ' + lastName,
            username,
            role: roles[0].roleName,
            email
          };
        }

        return null;
      })
    ).subscribe({
      next: user => this.currentUser = user
    });

    this.userService.all().subscribe({
      next: allUsers => this.allUsers = allUsers.map(user => {
        return {
          id: user.id,
          fullName: user.firstName + ' ' + user.lastName,
          username: user.username,
          role: user.roles[0] ? user.roles[0].roleName : 'NO_ROLE'
        };
      })
    });
  }

  deleteUser() {
    const { id } = this.userService.currentUser.value;

    this.userService.remove(String(id)).subscribe(next => {
      this.router.navigate(['login']);
    });
  }

  deleteUserById(id: string) {
    this.userService.remove(id).subscribe(next => this.allUsers = this.allUsers.filter(user => user.id !== id));
  }

  updateUser(user) {
    const { username, fullName, password } = user;

    const firstName = fullName.split(' ')[0];
    const lastName = fullName.split(' ')[1] || '';
    const newUser = { ...this.userService.currentUser.value, firstName, lastName, username, password };
    this.userService.currentUser.next(newUser);

    this.userService.update(newUser).subscribe();
  }

}
