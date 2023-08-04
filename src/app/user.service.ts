import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client:HttpClient, private logger:NGXLogger) { }

  loggerFiles(message:any) {
    this.logger.warn(message);
    return this.client.post(environment.loggerUrl,message);
  }

  addRegisters(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.registerUrl,body);

  }

  loginDetails(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.loginUrl,body);

  }

  adminTimetable(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.adminTimetableUrl,body);

  }

  adminResults(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.adminResultUrl,body);

  }

  adminReports(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.adminParentsReportUrl,body);

  }

  studentAttendance(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.studentAttendanceUrl,body);

  }

  studentDetails(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.studentDetailsUrl,body);

  }

  studentReports(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.studentReportsUrl,body);

  }

  deleteUserData(body:any) {

    this.logger.info(environment.successLoggerValue.deleteMessage);
    return this.client.delete(environment.registerUrl+"/"+body);

  }

  deleteStudentDetails(body:any) {

    this.logger.info(environment.successLoggerValue.deleteMessage);
    return this.client.delete(environment.studentDetailsUrl+"/"+body);

  }

  deleteadminResults(body:any) {

    this.logger.info(environment.successLoggerValue.deleteMessage);
    return this.client.delete(environment.adminResultUrl+"/"+body);

  }

  deleteAdminTimetable(body:any) {

    this.logger.info(environment.successLoggerValue.deleteMessage);
    return this.client.delete(environment.adminTimetableUrl+"/"+body);

  }

  deleteStudentReview(body:any) {

    this.logger.info(environment.successLoggerValue.deleteMessage);
    return this.client.delete(environment.studentReviewUrl+"/"+body);

  }

  adminExamHallAllocation(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.adminExamHallAllocationUrl,body);

  }

  adminExamTimetable(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.adminExamTimetableUrl,body);

  }

  studentExamFeesPayment(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.studentExamFeesPaymentUrl,body);

  }

  newsLetter(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.newsLetterUrl,body);

  }

  studentCollegeFeesPayment(body:any){

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.studentCollegeFeesPaymentUrl,body);

  }

  addStudentReview(body:any) {

    this.logger.info(environment.successLoggerValue.insertMessage);
    return this.client.post(environment.studentReviewUrl,body);

  }

}
