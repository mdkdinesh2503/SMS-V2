import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-StudentResultView',
  templateUrl: './StudentResultView.component.html',
  styleUrls: ['./StudentResultView.component.css'],
})
export class StudentResultViewComponent implements OnInit {
  constructor(
    private location: Location,
    private acRoute: ActivatedRoute,
    private service: LoginService,
    private auth:AuthService
  ) {}

  values: any;

  resultsFromAdmin: any = '';

  registerNumber: any;
  name: any;
  result: any;
  confirmPassword: any;
  professionals: any;
  bigData: any;
  crypto: any;
  graphicsMultimedia: any;
  bigDataLab: any;
  graphicsMultimediaLab: any;
  biHsn: any;
  bussinessHighspeed: any;

  ngOnInit() {

    this.auth.canAccessStudent();

    this.acRoute.params.subscribe((params) => {
      this.values = params['id'];
    });

    this.service.getAdminResult().subscribe((data) => {
      this.resultsFromAdmin = data;
      this.registerNumber =
        this.resultsFromAdmin[this.values - 1].REGISTER_NUMBER;
      this.name = this.resultsFromAdmin[this.values - 1].NAME;
      this.result = this.resultsFromAdmin[this.values - 1].RESULT;
      this.professionals =
        this.resultsFromAdmin[this.values - 1].PROFESSIONAL_ETHICS;
      this.bigData = this.resultsFromAdmin[this.values - 1].BIGDATA;
      this.crypto = this.resultsFromAdmin[this.values - 1].CRYPTOGRAPHY;
      this.graphicsMultimedia =
        this.resultsFromAdmin[this.values - 1].GRAPHICS_AND_MULTIMEDIA;
      this.bigDataLab = this.resultsFromAdmin[this.values - 1].BIGDATA_LAB;
      this.graphicsMultimediaLab =
        this.resultsFromAdmin[this.values - 1].GRAPHICS_AND_MULTIMEDIA_LAB;
      this.biHsn = this.resultsFromAdmin[this.values - 1].BI_HSN;
      this.bussinessHighspeed =
        this.resultsFromAdmin[this.values - 1].BUSSINESS_HIGHSPEED;
    });
  }

  goBack() {
    this.location.back();
  }

  printFunction() {
    window.print();
  }
}
