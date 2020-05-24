import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public _hours = 0;
  public _minutes = 0;
  public _seconds = 0;
  public _checkIn;
  public _interval;
  public _checkOut;
  constructor() {}

  ngOnInit(): void {}

  timerFunction() {
    this._checkIn = moment().format('YYYY-MM-DD[T]HH:mm:ss');
    console.log(this._checkIn);
    this._seconds = 1;

    this._interval = setInterval(() => {
      this.abc();
    }, 1000);
  }

  abc() {
    this._seconds++;
    if (this._seconds > 59) {
      this._seconds = 0;
      this._minutes++;
    }
    if (this._minutes > 59) {
      this._minutes = 0;
      this._hours++;
    }
  }
  timeroutFunction() {
    clearInterval(this._interval);
    this._checkOut = moment().format('YYYY-MM-DD[T]HH:mm:ss');
  }
}
