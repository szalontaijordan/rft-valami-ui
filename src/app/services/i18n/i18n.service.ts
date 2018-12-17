import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderTextResource } from '../../../assets/i18n/i18n.header.component';
import { LoginTextResource } from '../../../assets/i18n/i18n.login.component';
import { FooterTextResource } from '../../../assets/i18n/i18n.footer.component';
import { RegisterTextResource } from '../../../assets/i18n/i18n.register.component';
import { ErrorsTextResource } from '../../../assets/i18n/i18n.errors';
import { FeedbackTextResource } from '../../../assets/i18n/i18n.feedback.component';
import { DashboardTextResource } from '../../../assets/i18n/18n.dashboard.component';

@Injectable()
export abstract class I18nService {

  public subscription = new BehaviorSubject('hu');
  public locale = 'hu';

  constructor() {
  }

  abstract get header(): HeaderTextResource;

  abstract get login(): LoginTextResource;

  abstract get footer(): FooterTextResource;

  abstract get register(): RegisterTextResource;

  abstract get errors(): ErrorsTextResource;

  abstract get feedback(): FeedbackTextResource;

  abstract get dashboard(): DashboardTextResource;

}
