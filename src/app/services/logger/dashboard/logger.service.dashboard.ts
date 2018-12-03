import { Injectable } from '@angular/core';
import { LoggerService } from '../logger.service';
import { I18nService } from '../../i18n/i18n.service';

@Injectable()
export class DashboardLoggerService extends LoggerService {

  constructor(private i18n: I18nService) {
    super();
  }

  log(message: string): void {
    this.i18n.subscription.subscribe({
      next: currentLocale => {
        const locale = currentLocale === 'hu' ? 'hu-HU' : 'en-GB';
        this.lastMessage.next(`${new Date().toLocaleString(locale)} - ${this.i18n.dashboard['log'].clicked} - ${message}`);
      }
    });
  }
}
