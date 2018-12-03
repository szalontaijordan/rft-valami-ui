import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  @Output()
  send = new EventEmitter<any>();

  model = {
    fromEmail: '',
    fromName: '',
    text: ''
  };

  constructor(public i18n: I18nService) {
  }

  ngOnInit() {
  }

  submit() {
    this.send.emit(this.createEmailFromModel());
  }

  private createEmailFromModel() {
    const { fromName, fromEmail, text } = this.model;

    const to = 'rft.valami@example.com';
    const subject = `RFT Valami feedback - ${new Date().toLocaleDateString()}`;
    const body = `
      <h1>Feedback from ${fromName}</h1>
      <p>Date of feedback: ${new Date().toLocaleDateString()}</p>
      <pre>${text}</pre>
    `;

    return {
      fromEmail,
      to,
      subject,
      body
    };
  }

}
