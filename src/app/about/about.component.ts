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

  ngOnInit() {
    this.auth.loginAccess(false);
    this.checkNow();

    this.service.getquotesDisplay().subscribe((data) => {
      this.quotesFromDatabase = data;
    });
  }

  PopupMsg: boolean = true;
  value: any = false;

  intervalID: any = setTimeout(() => {

    setInterval(() => {
      this.openPopUp();
    }, 5000); //1sec = 1000 milli Seconds

  }, 50000); //50sec = 50000 milli Seconds

  closePopUp() {
    clearInterval(this.intervalID);
    clearTimeout(this.intervalID);
    this.PopupMsg = false;
  }

  max = 0;

  openPopUp() {
    var randomNumber = Math.floor(Math.random() * 15) + 1;
    console.log(randomNumber);
  }

  checkNow() {
    this.intervalID;
  }
}
