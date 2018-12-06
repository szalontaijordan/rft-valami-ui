import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {

  @Input()
  user: any;

  model = {
    fullName: '',
    password: '',
    passwordAgain: '',
    userName: ''
  };

  @Output()
  deleteUser = new EventEmitter<void>();

  isShowPassword: boolean = false;

  constructor(public i18n: I18nService, public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
    this.model.fullName = this.user.fullName;
    this.model.userName = this.user.userName;
  }

  togglePassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  editProfile() {
    this.ngxSmartModalService.getModal('editModal').open();
  }

  deleteProfile() {
    this.ngxSmartModalService.getModal('deleteModal').open();
  }

  update() {
    console.log(this.model);
  }

  delete() {
    this.deleteUser.emit();
  }

}
