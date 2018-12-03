import { Injectable } from '@angular/core';
import { i18n } from 'src/assets/i18n/i18n';
import { BehaviorSubject } from 'rxjs';
import { I18nService } from '../i18n.service';

@Injectable({
  providedIn: 'root'
})
export class StaticI18nService extends I18nService {

  public locale = 'hu';
  public subscription = new BehaviorSubject('hu');

  constructor() {
    super();
  }

  get header() {
    return i18n[this.locale].header;
  }

  get login() {
    return i18n[this.locale].login;
  }

  get footer() {
    return i18n[this.locale].footer;
  }

  get register() {
    return i18n[this.locale].register;
  }

  get errors() {
    return i18n[this.locale].errors;
  }

  get feedback() {
    return i18n[this.locale].feedback;
  }

  get dashboard() {
    return i18n[this.locale].dashboard;
  }
}
