import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { I18nService } from '../i18n/i18n.service';

@Injectable()
export abstract class NewsService {

  constructor(private i18nService: I18nService) {
  }

  abstract getNews(): Observable<any>;
}
