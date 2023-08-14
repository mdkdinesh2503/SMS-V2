import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { FooterComponent } from './Footer/footer.component';
import { HomeComponent } from './Home/home.component';
import { FrontpageComponent } from './FrontPage/frontPage.component';
import { AboutComponent } from './About/about.component';
import { BlogsComponent } from './Blogs/blogs.component';
import { ContactComponent } from './Contact/contact.component';
import { ServicesComponent } from './Services/services.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { CoursesComponent } from './Courses/courses.component';
import { PageErrorComponent } from './PageError/pageError.component';
import { SearchComponent } from './Search/search.component';
import { NotuploadedComponent } from './NotUploaded/notUploaded.component';
import { ErrorDisplayComponent } from './ErrorDisplay/errorDisplay.component';

import { AdminDashboardComponent } from './AdminDashboard/adminDashboard.component';
import { AdminNavbarComponent } from './AdminNavbar/adminNavbar.component';
import { AdminDetailsComponent } from './AdminDetails/adminDetails.component';
import { AdminAttendanceComponent } from './AdminAttendance/adminAttendance.component';
import { AdminExamComponent } from './AdminExam/adminExam.component';
import { AdminFeesComponent } from './AdminFees/adminFees.component';
import { AdminReportsComponent } from './AdminReports/adminReports.component';
import { AdminResultsComponent } from './AdminResults/adminResults.component';
import { AdminTimetableComponent } from './AdminTimetable/adminTimetable.component';
import { AdminRegisterListComponent } from './AdminRegisterList/adminRegisterList.component';
import { AdminRegisterEditComponent } from './AdminRegisterEdit/adminRegisterEdit.component';
import { AdminDetailsViewComponent } from './AdminDetailsView/adminDetailsView.component';
import { AdminResultViewComponent } from './AdminResultView/adminResultView.component';
import { AdminReportViewComponent } from './AdminReportView/adminReportView.component';
import { AdminReviewComponent } from './AdminReview/adminReview.component';
import { AdminReviewViewComponent } from './AdminReviewView/adminReviewView.component';

import { StudentDashboardComponent } from './StudentDashboard/studentDashboard.component';
import { StudentNavbarComponent } from './StudentNavbar/studentNavbar.component';
import { StudentAttendanceComponent } from './StudentAttendance/studentAttendance.component';
import { StudentDetailsComponent } from './StudentDetails/studentDetails.component';
import { StudentExamComponent } from './StudentExam/studentExam.component';
import { StudentFeesComponent } from './StudentFees/studentFees.component';
import { StudentReportsComponent } from './StudentReports/studentReports.component';
import { StudentResultsComponent } from './StudentResults/studentResults.component';
import { StudentTimetableComponent } from './StudentTimetable/studentTimetable.component';
import { StudentProfileComponent } from './StudentProfile/studentProfile.component';
import { StudentResultViewComponent } from './StudentResultView/studentResultView.component';
import { StudentFeesPaymentComponent } from './StudentFeesPayment/studentFeesPayment.component';
import { StudentExamPaymentComponent } from './StudentExamPayment/studentExamPayment.component';
import { StudentReviewComponent } from './StudentReview/studentReview.component';

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
