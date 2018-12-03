import { Component, OnInit, Input } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  @Input()
  role: string;

  constructor(public i18n: I18nService) { }

  ngOnInit() {
  }

}
