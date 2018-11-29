import { Component, OnInit } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  news: Array<any>;

  constructor(public i18n: I18nService, private newsService: NewsService) { }

  ngOnInit() {
    this.i18n.subscription.subscribe(
      next => this.fetchNews()
    );
  }

  fetchNews() {
    this.newsService.getNews().subscribe({
      next: news => this.news = news
    });
  }

}
