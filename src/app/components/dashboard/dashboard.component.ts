import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  get fullName() {
    return this.userService.currentUser.fullName;
  }

  get userName() {
    return this.userService.currentUser.userName;
  }

  get email() {
    return this.userService.currentUser.email;
  }

}
