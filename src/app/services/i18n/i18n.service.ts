import { Injectable } from '@angular/core';
import { HeaderI18NTextResource } from '../../../assets/i18n/i18n.header.component';
import { LoginI18NTextResource } from '../../../assets/i18n/i18n.login.component';
import { FooterI18NTextResource } from '../../../assets/i18n/i18n.footer.component';
import { BehaviorSubject } from 'rxjs';
import { RegisterI18NTextResource } from 'src/assets/i18n/i18n.register.component';
import { ErrorsI18NTextResource } from 'src/assets/i18n/i18n.errors';
import { FeedbackI18NTextResource } from 'src/assets/i18n/i18n.feedback.component';
import { DashboardI18NTextResource } from 'src/assets/i18n/18n.dashboard.component';

@Injectable()
export abstract class I18nService {

  public subscription = new BehaviorSubject('hu');
  public locale = 'hu';

  constructor() {
  }

  abstract get header(): HeaderI18NTextResource;

  abstract get login(): LoginI18NTextResource;

  abstract get footer(): FooterI18NTextResource;

  abstract get register(): RegisterI18NTextResource;

  abstract get errors(): ErrorsI18NTextResource;

  abstract get feedback(): FeedbackI18NTextResource;

  abstract get dashboard(): DashboardI18NTextResource;

}
