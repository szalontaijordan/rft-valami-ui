import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { I18nService } from '../../../services/i18n/i18n.service';

@Component({
  selector: 'app-credential-form',
  templateUrl: './credential-form.component.html',
  styleUrls: ['./credential-form.component.css']
})
export class CredentialFormComponent implements OnInit {

  model = {
    userName: '',
    password: ''
  };

  isShowPassword: boolean = false;

  @Output()
  login = new EventEmitter<any>();

  constructor(public i18n: I18nService) { }

  ngOnInit() {
  }

  togglePassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  submit(): boolean {
    this.login.emit(this.model);
    return false;
  }

}
