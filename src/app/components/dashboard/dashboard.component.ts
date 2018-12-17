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
    userName: '',
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
          const { email, fullName, userName, role } = user;
        
          return {
            fullName,
            userName,
            role,
            email
          };
        }
        
        return null;
      })
    ).subscribe({
      next: user => this.currentUser = user
    });

    this.userService.all().subscribe({
      next: allUsers => this.allUsers = allUsers
    });
  }

  deleteUser() {
    this.userService.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  deleteUserById(id: string) {
    this.allUsers = this.allUsers.filter(user => user.id !== id);
    this.userService.remove(id);
  }

  updateUser(user) {
    const newUser = { ...this.currentUser };
    
    for (let key in user) {
      newUser[key] = user[key];
    }

    this.userService.currentUser.next(newUser);
  }

}
