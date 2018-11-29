import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { I18nService } from '../i18n/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient, private i18n: I18nService) {
  }

  getNews(): Observable<any> {
    const params = {
      apiKey: '12208e577dbe4150a33a6ef718f22b2d',
      country: this.i18n.locale === 'hun' ? 'hu' : 'gb'
    };

    return this.http.get('https://newsapi.org/v2/top-headlines', { params }).pipe(
      map(result => {
        const news = result['articles'].map(article => ({
          short: article.description,
          title: article.title,
          url: article.url
        }));

        return news;
      })
    );
  }
}
