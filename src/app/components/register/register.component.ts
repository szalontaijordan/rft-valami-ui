import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = {
    user_name: '',
    password: '',
    full_name: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
