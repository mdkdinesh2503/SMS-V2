import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client:HttpClient) { }

  addRegisters(body:any){

    return this.client.post(environment.registerUrl,body);

  }

  loginDetails(body:any){

    return this.client.post(environment.loginUrl,body);

  }

  adminTimetable(body:any){

    return this.client.post(environment.adminTimetableUrl,body);

  }

  adminResults(body:any){

    return this.client.post(environment.adminResultUrl,body);

  }

  adminReports(body:any){

    return this.client.post(environment.adminParentsReportUrl,body);

  }

  studentAttendance(body:any){

    return this.client.post(environment.studentAttendanceUrl,body);

  }

  studentDetails(body:any){

    return this.client.post(environment.studentDetailsUrl,body);

  }

  studentReports(body:any){

    return this.client.post(environment.studentReportsUrl,body);

  }

  deleteUserData(body:any) {

    return this.client.delete(environment.registerUrl+"/"+body);

  }

  deleteStudentDetails(body:any) {

    return this.client.delete(environment.studentDetailsUrl+"/"+body);

  }

  deleteadminResults(body:any) {

    return this.client.delete(environment.adminResultUrl+"/"+body);

  }

  deleteAdminTimetable(body:any) {

    return this.client.delete(environment.adminTimetableUrl+"/"+body);

  }

  deleteStudentReview(body:any) {

    return this.client.delete(environment.studentReviewUrl+"/"+body);

  }

  adminExamHallAllocation(body:any){

    return this.client.post(environment.adminExamHallAllocationUrl,body);

  }

  adminExamTimetable(body:any){

    return this.client.post(environment.adminExamTimetableUrl,body);

  }

  studentExamFeesPayment(body:any){

    return this.client.post(environment.studentExamFeesPaymentUrl,body);

  }

  newsLetter(body:any){

    return this.client.post(environment.newsLetterUrl,body);

  }

  studentCollegeFeesPayment(body:any){

    return this.client.post(environment.studentCollegeFeesPaymentUrl,body);

  }

  addStudentReview(body:any) {

    return this.client.post(environment.studentReviewUrl,body);

  }

}
