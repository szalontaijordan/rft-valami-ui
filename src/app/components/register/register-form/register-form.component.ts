import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { I18nService } from '../../../services/i18n/i18n.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Input()
  submitText: string;

  @Output()
  register = new EventEmitter<any>();

  isShowPassword = false;

  model = {
    userName: '',
    email: '',
    password: '',
    passwordAgain: '',
    firstName: '',
    lastName: '',
    nickName: ''
  };

  constructor(public i18n: I18nService) { }

  ngOnInit() {
  }

  submit() {
    if (this.isPasswordCorrect) {
      this.register.emit(this.createUserFromModel());
    }
    return false;
  }

  togglePassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  get isPasswordCorrect(): boolean {
    const { password, passwordAgain } = this.model;
    const passwordMatch = password === passwordAgain;
    const numbers = !!password.match(/[0-9]/g);
    const capital = !!password.match(/[A-Z]/g);

    return passwordMatch && numbers && capital;
  }

  private createUserFromModel(): any {
    const { userName, firstName, lastName, nickName, password, email } = this.model;

    const nick =  nickName ? ` (${nickName})` : '';

    return {
      userName,
      email,
      password,
      fullName: `${lastName} ${firstName}${nick}`
    };
  }
}
