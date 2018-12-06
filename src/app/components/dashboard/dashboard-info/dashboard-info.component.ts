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
    userName: ''
  };

  @Output()
  deleteUser = new EventEmitter<void>();

  @Output()
  editUser = new EventEmitter<any>();

  constructor(public i18n: I18nService, public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
    this.model.fullName = this.user.fullName;
    this.model.userName = this.user.userName;
  }

  editProfile() {
    this.ngxSmartModalService.getModal('editModal').open();
  }

  deleteProfile() {
    this.ngxSmartModalService.getModal('deleteModal').open();
  }

  update() {
    this.editUser.emit(this.model);
    this.ngxSmartModalService.close('editModal');
  }

  delete() {
    this.deleteUser.emit();
  }

}
