import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private auth: AuthService, private service: LoginService) {
    this.setNow();
  }

  quotesFromDatabase: any;
  quoteData: any;
  authorData: any;

  ngOnInit() {
    this.auth.loginAccess(false);

    // this.openPopupTimeout();

    this.service.getquotesDisplay().subscribe((data) => {
      this.quotesFromDatabase = data;
      var randomNumber;

      this.quoteData = this.quotesFromDatabase[0].quote;
      this.authorData = this.quotesFromDatabase[0].author;

      setInterval(() => {
        randomNumber = Math.floor(Math.random() * 15) + 1;
        this.quoteData = this.quotesFromDatabase[randomNumber].quote;
        this.authorData = this.quotesFromDatabase[randomNumber].author;
      }, 7000); // no changes
    });
  }

  hours: string = '';
  minutes: string = '';
  seconds: string = '';
  months: string = '';
  years: string = '';
  ampm: any = '';

  setNow() {
    setInterval(() => {
      var date = new Date();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var ap = '';

      if (hour >= 12) {
        ap = 'PM';
      } else {
        ap = 'AM';
      }

      if (hour > 12) {
        hour = hour - 12;
      }

      this.hours = '' + hour + '';
      this.minutes = '' + minute + '';
      this.seconds = '' + second + '';
      this.months = '' + month + '';
      this.years = '' + year + '';
      this.ampm = '' + ap + '';

      this.startPopUp();
    }, 1000);
  }

  PopupMsg: boolean = false;
  setTimeOutOpen: any;
  setTimeOutClose: any;

  closePopUp() {
    this.PopupMsg = false;
    clearTimeout(this.setTimeOutOpen);
    clearTimeout(this.setTimeOutClose);
  }

  closePopupTimeout() {
    this.setTimeOutClose = setTimeout(() => {
      this.PopupMsg = false;
      this.openPopupTimeout();
    }, 14000); //1sec = 1000 milli Seconds
  }

  openPopupTimeout() {
    this.setTimeOutOpen = setTimeout(() => {
      this.PopupMsg = true;
      this.closePopupTimeout();
    }, 7000); //1sec = 1000 milli Seconds
  }

  startPopUp() {
    if (
      this.hours == '9' &&
      this.minutes >= '57' &&
      this.minutes <= '58' &&
      this.years == '2023' &&
      this.months == '6'
    ) {
      this.PopupMsg = true;
    }

    if (
      this.hours == '9' &&
      this.minutes >= '59' &&
      this.years == '2023' &&
      this.months == '6'
    ) {
      this.PopupMsg = false;
    }
  }

  closedPopUp() {
    this.PopupMsg = false;
  }
}
