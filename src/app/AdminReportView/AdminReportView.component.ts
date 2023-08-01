import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UpdateService } from '../update.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-AdminReportView',
  templateUrl: './AdminReportView.component.html',
  styleUrls: ['./AdminReportView.component.css'],
})
export class AdminReportViewComponent implements OnInit {
  constructor(
    private route: Router,
    private acRoute: ActivatedRoute,
    private service: LoginService,
    private updateService: UpdateService,
    private datepipe: DatePipe,
    private auth:AuthService
  ) {}

  values: any;

  reportsFromStudent: any = '';

  Name: any;
  RegisterNumber: any;
  Field: any;
  Dates: any;
  Times: any;
  msg: any;

  ngOnInit() {

    this.auth.canAccessAdmin();

    this.acRoute.params.subscribe((params) => {
      this.values = params['id'];
    });

    this.service.getStudentReports().subscribe((data) => {
      this.reportsFromStudent = data;
      this.Name = this.reportsFromStudent[this.values - 1].NAME;
      this.RegisterNumber = this.reportsFromStudent[this.values - 1].REGISTER_NUMBER;
      this.Field = this.reportsFromStudent[this.values - 1].FIELD;
      this.Dates = this.reportsFromStudent[this.values - 1].DATE;
      this.Times = this.reportsFromStudent[this.values - 1].TIME;
      this.msg = this.reportsFromStudent[this.values - 1].MESSAGE;
    });
  }

  goBack() {
    this.route.navigate(['/adminreports']);
  }
}
