import { Injectable } from '@angular/core';
import { i18n } from 'src/assets/i18n/i18n';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  public locale = 'hun';

  constructor() { }

  get header() {
    return i18n[this.locale].header;
  }

  get login() {
    return i18n[this.locale].login;
  }
}
