import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AdminAttendanceComponent } from './AdminAttendance/AdminAttendance.component';
import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.component';
import { AdminDetailsComponent } from './AdminDetails/AdminDetails.component';
import { AdminDetailsViewComponent } from './adminDetailsView/adminDetailsView.component';
import { AdminExamComponent } from './AdminExam/AdminExam.component';
import { AdminFeesComponent } from './AdminFees/AdminFees.component';
import { AdminNavbarComponent } from './AdminNavbar/AdminNavbar.component';
import { AdminRegisterEditComponent } from './AdminRegisterEdit/AdminRegisterEdit.component';
import { AdminRegisterListComponent } from './AdminRegisterList/AdminRegisterList.component';
import { AdminReportsComponent } from './AdminReports/AdminReports.component';
import { AdminReportViewComponent } from './AdminReportView/AdminReportView.component';
import { AdminResultsComponent } from './AdminResults/AdminResults.component';
import { AdminResultViewComponent } from './AdminResultView/AdminResultView.component';
import { AdminTimetableComponent } from './AdminTimetable/AdminTimetable.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotuploadedComponent } from './notuploaded/notuploaded.component';
import { PageErrorComponent } from './PageError/PageError.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { StudentAttendanceComponent } from './StudentAttendance/StudentAttendance.component';
import { StudentDashboardComponent } from './StudentDashboard/StudentDashboard.component';
import { StudentDetailsComponent } from './StudentDetails/StudentDetails.component';
import { StudentExamComponent } from './StudentExam/StudentExam.component';
import { StudentExamPaymentComponent } from './StudentExamPayment/StudentExamPayment.component';
import { StudentFeesComponent } from './StudentFees/StudentFees.component';
import { StudentFeesPaymentComponent } from './StudentFeesPayment/StudentFeesPayment.component';
import { StudentNavbarComponent } from './StudentNavbar/StudentNavbar.component';
import { StudentReportsComponent } from './StudentReports/StudentReports.component';
import { StudentResultsComponent } from './StudentResults/StudentResults.component';
import { StudentResultViewComponent } from './StudentResultView/StudentResultView.component';
import { StudentTimetableComponent } from './StudentTimetable/StudentTimetable.component';
import { StudentProfileComponent } from './StudentProfile/StudentProfile.component';
import { StudentReviewComponent } from './StudentReview/StudentReview.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full', title: ". . S M S . . C L O U D . ." },
  { path: 'frontpage', component: FrontpageComponent, title: ". . S M S . . C L O U D . ."},
  { path: 'home', component: HomeComponent, title: "C L O U D - H O M E"},
  { path: 'about', component: AboutComponent, title: "C L O U D - A B O U T"},
  { path: 'courses', component: CoursesComponent, title: "C L O U D - C O U R S E S"},
  { path: 'blogs', component: BlogsComponent, title: "C L O U D - B L O G S"},
  { path: 'services', component: ServicesComponent, title: "C L O U D - S E R V I C E S"},
  { path: 'contact', component: ContactComponent, title: "C L O U D - C O N T A C T"},
  { path: 'login', component: LoginComponent, title: "C L O U D - L O G I N"},
  { path: 'register', component: RegisterComponent, title: "C L O U D - R E G I S T E R"},
  { path: 'admindashboard', component: AdminDashboardComponent, title: "A D M I N - D A S H B O A R D"},
  { path: 'admindetails', component: AdminDetailsComponent, title: "A D M I N - D E T A I L S"},
  { path: 'adminattendance', component: AdminAttendanceComponent, title: "A D M I N - A T T E N D A N C E "},
  { path: 'Adminexam', component: AdminExamComponent, title: "A D M I N - E X A M"},
  { path: 'adminfees', component: AdminFeesComponent, title: "A D M I N - F E E S"},
  { path: 'adminregisterlist', component: AdminRegisterListComponent, title: "A D M I N - R E G I S T E R - L I S T"},
  { path: 'adminreports', component: AdminReportsComponent, title: "A D M I N - R E P O R T S"},
  { path: 'adminresults', component: AdminResultsComponent, title: "A D M I N - R E S U L T S"},
  { path: 'admintimetable', component: AdminTimetableComponent, title: "A D M I N - T I M E T A B L E"},
  { path: 'studentdashboard', component: StudentDashboardComponent, title: "S T U D E N T - D A S H B O A R D"},
  { path: 'studentdetails', component: StudentDetailsComponent, title: "S T U D E N T - D E T A I L S"},
  { path: 'studentattendance', component: StudentAttendanceComponent, title: "S T U D E N T - A T T E N D A N C E "},
  { path: 'studentexam', component: StudentExamComponent, title: "S T U D E N T - E X A M"},
  { path: 'studentfees', component: StudentFeesComponent, title: "S T U D E N T - F E E S"},
  { path: 'studentreports', component: StudentReportsComponent, title: "S T U D E N T - R E P O R T S"},
  { path: 'studentresults', component: StudentResultsComponent, title: "S T U D E N T - R E S U L T S"},
  { path: 'studenttimetable', component: StudentTimetableComponent, title: "S T U D E N T - T I M E T A B L E"},
  { path: 'studentprofile', component: StudentProfileComponent, title: "S T U D E N T - P R O F I L E"},
  { path: 'studentreview', component: StudentReviewComponent, title: "S T U D E N T - R E V I E W"},
  { path: 'notupload', component: NotuploadedComponent, title: "N O T - Y E T - U P L O A D"},
  { path: 'studentresultview/:register', component: StudentResultViewComponent, title: "S - - R E S U L T - V I E W"},
  { path: 'studentfeespayment/:id/:register', component: StudentFeesPaymentComponent, title: "S - - F E E S - P A Y M E N T"},
  { path: 'studentexampayment/:registerNumber', component: StudentExamPaymentComponent, title: "S - - E X A M - P A Y M E N T"},
  { path: 'adminresultview/:id/:register', component: AdminResultViewComponent, title: "A - - R E S U L T - V I E W"},
  { path: 'admindetailsview/:id/:register', component: AdminDetailsViewComponent, title: "A - - D E T A I L S - V I E W"},
  { path: 'adminreportview/:id', component: AdminReportViewComponent, title: "A - - R E P O R T S - V I E W"},
  { path: 'adminregisteredit/:id/:name', component: AdminRegisterEditComponent, title: "A - - R E G I S T E R - V I E W"},
  { path: '**', component: PageErrorComponent, title: "P A G E - N O T - F O U N D"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [],
})
export class AppRoutingModule {}
