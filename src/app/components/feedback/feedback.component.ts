import { Component, OnInit } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public i18n: I18nService) {
  }

  ngOnInit() {
  }

  sendEmail(email) {
    // TODO
    console.log(email);
  }

}
