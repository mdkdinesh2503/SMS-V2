import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private auth: AuthService, private service: LoginService) {}

  quotesFromDatabase: any;
  quoteData: any;
  authorData: any;

  ngOnInit() {
    this.auth.loginAccess(false);
    this.openPopupTimeout();

    this.service.getquotesDisplay().subscribe((data) => {
      this.quotesFromDatabase = data;
      var randomNumber;
      setInterval(() => {
        randomNumber = Math.floor(Math.random() * 15) + 1;
        this.quoteData = this.quotesFromDatabase[randomNumber].quote;
        this.authorData = this.quotesFromDatabase[randomNumber].author;
      }, 7000); // no changes
    });
  }

  PopupMsg: boolean = false;
  setTimeOutOpen:any;
  setTimeOutClose:any;

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

}
