import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { FooterComponent } from './Footer/Footer.component';
import { HomeComponent } from './Home/Home.component';
import { FrontpageComponent } from './FrontPage/FrontPage.component';
import { AboutComponent } from './About/about.component';
import { BlogsComponent } from './Blogs/Blogs.component';
import { ContactComponent } from './Contact/Contact.component';
import { ServicesComponent } from './Services/Services.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { CoursesComponent } from './Courses/Courses.component';
import { PageErrorComponent } from './PageError/PageError.component';
import { SearchComponent } from './Search/Search.component';
import { NotuploadedComponent } from './NotUploaded/NotUploaded.component';
import { ErrorDisplayComponent } from './ErrorDisplay/ErrorDisplay.component';

import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.component';
import { AdminNavbarComponent } from './AdminNavbar/AdminNavbar.component';
import { AdminDetailsComponent } from './AdminDetails/AdminDetails.component';
import { AdminAttendanceComponent } from './AdminAttendance/AdminAttendance.component';
import { AdminExamComponent } from './AdminExam/AdminExam.component';
import { AdminFeesComponent } from './AdminFees/AdminFees.component';
import { AdminReportsComponent } from './AdminReports/AdminReports.component';
import { AdminResultsComponent } from './AdminResults/AdminResults.component';
import { AdminTimetableComponent } from './AdminTimetable/AdminTimetable.component';
import { AdminRegisterListComponent } from './AdminRegisterList/AdminRegisterList.component';
import { AdminRegisterEditComponent } from './AdminRegisterEdit/AdminRegisterEdit.component';
import { AdminDetailsViewComponent } from './AdminDetailsView/AdminDetailsView.component';
import { AdminResultViewComponent } from './AdminResultView/AdminResultView.component';
import { AdminReportViewComponent } from './AdminReportView/AdminReportView.component';
import { AdminReviewComponent } from './AdminReview/AdminReview.component';
import { AdminReviewViewComponent } from './AdminReviewView/AdminReviewView.component';

import { StudentDashboardComponent } from './StudentDashboard/StudentDashboard.component';
import { StudentNavbarComponent } from './StudentNavbar/StudentNavbar.component';
import { StudentAttendanceComponent } from './StudentAttendance/StudentAttendance.component';
import { StudentDetailsComponent } from './StudentDetails/StudentDetails.component';
import { StudentExamComponent } from './StudentExam/StudentExam.component';
import { StudentFeesComponent } from './StudentFees/StudentFees.component';
import { StudentReportsComponent } from './StudentReports/StudentReports.component';
import { StudentResultsComponent } from './StudentResults/StudentResults.component';
import { StudentTimetableComponent } from './StudentTimetable/StudentTimetable.component';
import { StudentProfileComponent } from './StudentProfile/StudentProfile.component';
import { StudentResultViewComponent } from './StudentResultView/StudentResultView.component';
import { StudentFeesPaymentComponent } from './StudentFeesPayment/StudentFeesPayment.component';
import { StudentExamPaymentComponent } from './StudentExamPayment/StudentExamPayment.component';
import { StudentReviewComponent } from './StudentReview/StudentReview.component';

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      FooterComponent,
      HomeComponent,
      FrontpageComponent,
      AboutComponent,
      BlogsComponent,
      ContactComponent,
      ServicesComponent,
      LoginComponent,
      RegisterComponent,
      CoursesComponent,
      AdminDashboardComponent,
      AdminNavbarComponent,
      AdminDetailsComponent,
      AdminAttendanceComponent,
      AdminExamComponent,
      AdminFeesComponent,
      AdminReportsComponent,
      AdminResultsComponent,
      AdminTimetableComponent,
      StudentDashboardComponent,
      StudentNavbarComponent,
      StudentAttendanceComponent,
      StudentDetailsComponent,
      StudentExamComponent,
      StudentFeesComponent,
      StudentReportsComponent,
      StudentResultsComponent,
      StudentTimetableComponent,
      AdminRegisterListComponent,
      PageErrorComponent,
      NotuploadedComponent,
      StudentResultViewComponent,
      AdminRegisterEditComponent,
      AdminDetailsViewComponent,
      AdminResultViewComponent,
      AdminReportViewComponent,
      StudentFeesPaymentComponent,
      StudentExamPaymentComponent,
      SearchComponent,
      StudentProfileComponent,
      StudentReviewComponent,
      AdminReviewComponent,
      AdminReviewViewComponent,
      ErrorDisplayComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OrderModule,
    LoggerModule.forRoot({
      serverLoggingUrl: 'http://localhost:3000/',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
