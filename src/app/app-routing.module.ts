import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintanenceGuard } from './maintanence.guard';

import { AdminAttendanceComponent } from './AdminAttendance/adminAttendance.component';
import { AdminDashboardComponent } from './AdminDashboard/adminDashboard.component';
import { AdminDetailsComponent } from './AdminDetails/adminDetails.component';
import { AdminDetailsViewComponent } from './AdminDetailsView/adminDetailsView.component';
import { AdminExamComponent } from './AdminExam/adminExam.component';
import { AdminFeesComponent } from './AdminFees/adminFees.component';
import { AdminRegisterEditComponent } from './AdminRegisterEdit/adminRegisterEdit.component';
import { AdminRegisterListComponent } from './AdminRegisterList/adminRegisterList.component';
import { AdminReportsComponent } from './AdminReports/adminReports.component';
import { AdminReportViewComponent } from './AdminReportView/adminReportView.component';
import { AdminResultsComponent } from './AdminResults/adminResults.component';
import { AdminResultViewComponent } from './AdminResultView/adminResultView.component';
import { AdminTimetableComponent } from './AdminTimetable/adminTimetable.component';
import { AdminReviewComponent } from './AdminReview/adminReview.component';
import { AdminReviewViewComponent } from './AdminReviewView/adminReviewView.component';

import { AboutComponent } from './About/about.component';
import { BlogsComponent } from './Blogs/blogs.component';
import { ContactComponent } from './Contact/contact.component';
import { CoursesComponent } from './Courses/courses.component';
import { FrontpageComponent } from './FrontPage/frontPage.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { NotuploadedComponent } from './NotUploaded/notUploaded.component';
import { PageErrorComponent } from './PageError/pageError.component';
import { RegisterComponent } from './Register/register.component';
import { ServicesComponent } from './Services/services.component';

import { StudentAttendanceComponent } from './StudentAttendance/studentAttendance.component';
import { StudentDashboardComponent } from './StudentDashboard/studentDashboard.component';
import { StudentDetailsComponent } from './StudentDetails/studentDetails.component';
import { StudentExamComponent } from './StudentExam/studentExam.component';
import { StudentExamPaymentComponent } from './StudentExamPayment/studentExamPayment.component';
import { StudentFeesComponent } from './StudentFees/studentFees.component';
import { StudentFeesPaymentComponent } from './StudentFeesPayment/studentFeesPayment.component';
import { StudentReportsComponent } from './StudentReports/studentReports.component';
import { StudentResultsComponent } from './StudentResults/studentResults.component';
import { StudentResultViewComponent } from './StudentResultView/studentResultView.component';
import { StudentTimetableComponent } from './StudentTimetable/studentTimetable.component';
import { StudentProfileComponent } from './StudentProfile/studentProfile.component';
import { StudentReviewComponent } from './StudentReview/studentReview.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full', title: ". . S M S . . C L O U D . ."},
  { path: 'frontpage', component: FrontpageComponent, title: ". . S M S . . C L O U D . .", canActivate:[MaintanenceGuard]},
  { path: 'home', component: HomeComponent, title: "C L O U D - H O M E", canActivate:[MaintanenceGuard]},
  { path: 'about', component: AboutComponent, title: "C L O U D - A B O U T", canActivate:[MaintanenceGuard]},
  { path: 'courses', component: CoursesComponent, title: "C L O U D - C O U R S E S", canActivate:[MaintanenceGuard]},
  { path: 'blogs', component: BlogsComponent, title: "C L O U D - B L O G S", canActivate:[MaintanenceGuard]},
  { path: 'services', component: ServicesComponent, title: "C L O U D - S E R V I C E S", canActivate:[MaintanenceGuard]},
  { path: 'contact', component: ContactComponent, title: "C L O U D - C O N T A C T", canActivate:[MaintanenceGuard]},
  { path: 'login', component: LoginComponent, title: "C L O U D - L O G I N", canActivate:[MaintanenceGuard]},
  { path: 'register', component: RegisterComponent, title: "C L O U D - R E G I S T E R", canActivate:[MaintanenceGuard]},

  { path: 'admindashboard', component: AdminDashboardComponent, title: "A D M I N - D A S H B O A R D"},
  { path: 'admindetails', component: AdminDetailsComponent, title: "A D M I N - D E T A I L S"},
  { path: 'adminattendance', component: AdminAttendanceComponent, title: "A D M I N - A T T E N D A N C E "},
  { path: 'adminexam', component: AdminExamComponent, title: "A D M I N - E X A M"},
  { path: 'adminfees', component: AdminFeesComponent, title: "A D M I N - F E E S"},
  { path: 'adminregisterlist', component: AdminRegisterListComponent, title: "A D M I N - R E G I S T E R - L I S T"},
  { path: 'adminreports', component: AdminReportsComponent, title: "A D M I N - R E P O R T S"},
  { path: 'adminresults', component: AdminResultsComponent, title: "A D M I N - R E S U L T S"},
  { path: 'admintimetable', component: AdminTimetableComponent, title: "A D M I N - T I M E T A B L E"},
  { path: 'adminreview', component: AdminReviewComponent, title: "A D M I N - R E V I E W"},
  { path: 'adminresultview/:id/:register', component: AdminResultViewComponent, title: "A - - R E S U L T - V I E W"},
  { path: 'admindetailsview/:id/:register', component: AdminDetailsViewComponent, title: "A - - D E T A I L S - V I E W"},
  { path: 'adminreportview/:id', component: AdminReportViewComponent, title: "A - - R E P O R T S - V I E W"},
  { path: 'adminregisteredit/:id/:name', component: AdminRegisterEditComponent, title: "A - - R E G I S T E R - V I E W"},
  { path: 'adminreviewopen/:id', component: AdminReviewViewComponent, title: "A - - R E V I E W - V I E W"},

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
  { path: 'studentresultview/:register', component: StudentResultViewComponent, title: "S - - R E S U L T - V I E W"},
  { path: 'studentfeespayment/:id/:register', component: StudentFeesPaymentComponent, title: "S - - F E E S - P A Y M E N T"},
  { path: 'studentexampayment/:registerNumber', component: StudentExamPaymentComponent, title: "S - - E X A M - P A Y M E N T"},

  { path: 'construction', component: NotuploadedComponent, title: "C O N S T R U C T I O N"},
  { path: '**', component: PageErrorComponent, title: "P A G E - N O T - F O U N D"},
  { path: 'pageError', component: PageErrorComponent, title: "P A G E - N O T - F O U N D"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [],
})
export class AppRoutingModule {}
