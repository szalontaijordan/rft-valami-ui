import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  @Input()
  role: string;

  @Input()
  allUsers: Array<any>;

  @Output()
  delete = new EventEmitter<string>();

  constructor(public i18n: I18nService, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  showTBDModal() {
    this.ngxSmartModalService.getModal('tbdModal').open();
  }

  showAllUsersModal() {
    this.ngxSmartModalService.getModal('allUsersModal').open();
  }

  deleteUser(id: string) {
    this.delete.emit(id);
  }

}
