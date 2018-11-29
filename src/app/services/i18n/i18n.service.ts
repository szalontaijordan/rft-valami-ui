import { Injectable } from '@angular/core';
import { HeaderI18NTextResource } from '../../../assets/i18n/i18n.header.component';
import { LoginI18NTextResource } from '../../../assets/i18n/i18n.login.component';
import { FooterI18NTextResource } from '../../../assets/i18n/i18n.footer.component';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export abstract class I18nService {

  public subscription = new BehaviorSubject('hu');
  public locale: string = 'hu';

  constructor() {
  }

  abstract get header(): HeaderI18NTextResource;

  abstract get login(): LoginI18NTextResource;

  abstract get footer(): FooterI18NTextResource;
}
