import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'app-dashboard-log',
  templateUrl: './dashboard-log.component.html',
  styleUrls: ['./dashboard-log.component.css']
})
export class DashboardLogComponent implements OnInit {

  logs: Array<string>;

  constructor(private logger: LoggerService, public i18n: I18nService) {
    this.logs = [];
  }

  ngOnInit() {
    this.logger.lastMessage.subscribe({
      next: message => this.logs.length === 100 ? this.logs = [message] : this.logs.unshift(message)
    });
  }

}
