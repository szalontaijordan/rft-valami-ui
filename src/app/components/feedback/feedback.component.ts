import { Component, OnInit } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, public i18n: I18nService) {
  }

  ngOnInit() {
  }

  sendEmail(email) {
    this.http.post('/api/feedback', email).subscribe({
      next: data => this.router.navigate([''])
    });
  }

}
