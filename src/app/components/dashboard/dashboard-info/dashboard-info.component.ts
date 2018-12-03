import { Component, OnInit, Input } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {

  @Input()
  user: any;

  constructor(public i18n: I18nService) {
  }

  ngOnInit() {
  }

  editProfile() {
    console.log('editing like a boss');
  }

  deleteProfile() {
    console.log('deleting like a boss');
  }

}
