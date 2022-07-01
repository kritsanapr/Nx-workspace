import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dtp-cm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  ngOnInit(): void {
    this.logValue();
  }

  logValue() {
    console.log('Log value is work');
  }
}
