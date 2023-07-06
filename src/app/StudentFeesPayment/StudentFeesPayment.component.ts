import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-StudentFeesPayment',
  templateUrl: './StudentFeesPayment.component.html',
  styleUrls: ['./StudentFeesPayment.component.css'],
})
export class StudentFeesPaymentComponent implements OnInit {
  constructor(
    private location: Location,
    private route: Router,
    private userService: UserService,
    private acRoute: ActivatedRoute,
    private service: LoginService,
    private auth:AuthService
  ) {}

  detailsFromStudent: any;
  getValueId: any;

  studentRegisterNo: any;
  studentName: any;
  studentEmail: any;
  studentPhoneNo: any;
  studentCollegeName: any;
  studentDegree: any;
  studentDepartment: any;
  stuentTotalAmount: any;

  ngOnInit() {

    this.auth.canAccessStudent();

    this.acRoute.params.subscribe((params) => {
      this.studentRegisterNo = params['id'];
    });

    this.acRoute.params.subscribe((params) => {
      this.stuentTotalAmount = params['register'];
    });

    this.service.getStudentDetails().subscribe((data) => {
      this.detailsFromStudent = data;
      for (var i = 0; i < this.detailsFromStudent.length; i++) {
        if (
          this.studentRegisterNo == this.detailsFromStudent[i].REGISTER_NUMBER
        ) {
          this.getValueId = i;
        }
      }

      this.getValueId = this.getValueId;
      this.studentName = this.detailsFromStudent[this.getValueId].NAME;
      this.studentEmail = this.detailsFromStudent[this.getValueId].EMAIL;
      this.studentPhoneNo =
        this.detailsFromStudent[this.getValueId].MOBILE_NUMBER;
      this.studentCollegeName =
        this.detailsFromStudent[this.getValueId].STUDENT_COLLEGE_NAME;
      this.studentDegree =
        this.detailsFromStudent[this.getValueId].STUDENT_DEGREE;
      this.studentDepartment =
        this.detailsFromStudent[this.getValueId].STUDENT_DEPARTMENT;
    });
  }

  goBack() {
    this.location.back();
  }

  submitForm(cardNumber: any, month: any, cvv: any) {
    var body = {
      REGISTER_NUMBER: this.studentRegisterNo,
      NAME: this.studentName,
      FEES: 'Paided',
      DEGREE: this.studentDegree,
      DEPARTMENT: this.studentDepartment,
      TOTAL_AMOUNT: this.stuentTotalAmount,
    };
    if (cardNumber != '' && month != '' && cvv != '') {
      this.userService.studentCollegeFeesPayment(body).subscribe((data) => {
        alert('Fees Paided Successfully');
        this.route.navigate(['/studentfees']);
      });
    } else {
      alert('Field is Not Empty!!');
    }
  }

  submitFormUPI(upiNumber:any) {
    var body = {
      REGISTER_NUMBER: this.studentRegisterNo,
      NAME: this.studentName,
      FEES: 'Paided',
      DEGREE: this.studentDegree,
      DEPARTMENT: this.studentDepartment,
      TOTAL_AMOUNT: this.stuentTotalAmount,
    };
    if(upiNumber != '') {
      this.userService.studentCollegeFeesPayment(body).subscribe((data) => {
        alert('Fees Paided Successfully');
        this.route.navigate(['/studentfees']);
      });
    } else {
      alert('Field is Not Empty!!');
    }
  }

  Container :boolean = true;
  Credit:boolean = false;
  Debit:boolean = false;
  Upi:boolean = false;
  Qrcode:boolean = false;

  activateCreditCard() {
    this.Credit = true;
    this.Debit = false;
    this.Upi = false;
    this.Qrcode = false;
    this.Container = false;
  }

  activateDebitCard() {
    this.Credit = false;
    this.Debit = true;
    this.Upi = false;
    this.Qrcode = false;
    this.Container = false;
  }

  activateUpi() {
    this.Credit = false;
    this.Debit = false;
    this.Upi = true;
    this.Qrcode = false;
    this.Container = false;
  }

  activateQrcode() {
    this.Credit = false;
    this.Debit = false;
    this.Upi = false;
    this.Qrcode = true;
    this.Container = false;
  }
}
