import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-StudentReports',
  templateUrl: './StudentReports.component.html',
  styleUrls: ['./StudentReports.component.css'],
})
export class StudentReportsComponent implements OnInit {
  constructor(
    private location: Location,
    private auth: AuthService,
    private route:Router,
    private userService: UserService,
    private datePipe: DatePipe
  ) {
    this.setNow();
  }

  ngOnInit(): void {

    this.auth.canAccessStudent();
  }

  dates:any = this.datePipe.transform(new Date(), 'dd-MM-yyyy');

  times: string = '';
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  setNow() {
    setInterval(() => {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var ampm = "";

    if (hour >= 12) {
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    this.hours = '' + hour + '';

      if (this.hours.length == 1) {
        this.hours = '0' + hour + '';
      } else {
        this.hours = '' + hour + '';
      }

      this.minutes = '' + minute + '';

      if (this.minutes.length == 1) {
        this.minutes = '0' + minute + '';
      } else {
        this.minutes = '' + minute + '';
      }

      this.seconds = '' + second + '';

      if (this.seconds.length == 1) {
        this.seconds = '0' + second + '';
      } else {
        this.seconds = '' + second + '';
      }

    this.times = this.hours + ":" + this.minutes + ":" + this.seconds + " " + ampm;
  }, 1000);
  }

  goBack() {
    this.location.back();
  }

  submitList(
    registerNumber: any,
    name: any,
    field: any,
    message: any
  ) {
    var body = {
      REGISTER_NUMBER: registerNumber,
      NAME: name,
      FIELD: field,
      DATE: this.dates,
      TIME: this.times,
      MESSAGE: message,
    };

    if(registerNumber != "" &&  name != "" &&  field != "" &&  message != "") {
      this.userService.studentReports(body).subscribe((data) => {
        alert('Student Reports send successfully');
        window.location.reload();
      });
    }else{
      alert("Field Does not Empty!!");
    }
  }

  logOut() {
    this.auth.removeToken();
    this.route.navigate(['/login']);
  }

}
