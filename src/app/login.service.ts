import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getRegisterDetails() {
    return this.http.get(environment.registerUrl);
  }

  getAdminListDetails() {
    return this.http.get(environment.adminListUrl);
  }

  getStudentDetails() {
    return this.http.get(environment.studentDetailsUrl);
  }

  getStudentAttendance() {
    return this.http.get(environment.studentAttendanceUrl);
  }

  getStudentReports() {
    return this.http.get(environment.studentReportsUrl);
  }

  getAdminTimetable() {
    return this.http.get(environment.adminTimetableUrl);
  }

  getAdminResult() {
    return this.http.get(environment.adminResultUrl);
  }

  getAdminParentsReport() {
    return this.http.get(environment.adminParentsReportUrl);
  }

  getAdminExamHallAllocation(){
    return this.http.get(environment.adminExamHallAllocationUrl);
  }

  getAdminExamTimetable(){
    return this.http.get(environment.adminExamTimetableUrl);
  }

  getStudentExamFeesPayment(){
    return this.http.get(environment.studentExamFeesPaymentUrl);
  }

  getStudentCollegeFeesPaymentUrl(){
    return this.http.get(environment.studentCollegeFeesPaymentUrl);
  }

  getquotesDisplay(){
    return this.http.get(environment.quotesDisplayUrl);
  }

  getStudentReview() {
    return this.http.get(environment.studentReviewUrl);
  }

}
