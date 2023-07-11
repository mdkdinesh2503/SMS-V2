import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as xlsx from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private route: Router) {}

  storeToken(token: string) {
    sessionStorage.setItem('USERNAME', token);
    return token;
  }

  storeTokenId(token: string) {
    sessionStorage.setItem('ID', token);
  }

  displayToken() {
    return sessionStorage.getItem('USERNAME');
  }

  displayIdToken() {
    return sessionStorage.getItem('ID');
  }

  removeToken() {
    sessionStorage.removeItem('USERNAME');
    sessionStorage.removeItem('ID');
    this.storeAccessStudent(false);
    this.storeAccessAdmin(false);
  }

  isAuthenticatedStudent(): boolean {
    if (
      sessionStorage.getItem('AllowStudent') != null &&
      sessionStorage.getItem('AllowStudent') == 'true'
    ) {
      return true;
    } else {
      return false;
    }
  }

  isAuthenticatedAdmin(): boolean {
    if (
      sessionStorage.getItem('AllowAdmin') != null &&
      sessionStorage.getItem('AllowAdmin') == 'true'
    ) {
      return true;
    } else {
      return false;
    }
  }

  canAccessAdmin() {
    if (!this.isAuthenticatedAdmin()) {
      this.route.navigate(['/login']);
    }
  }

  canAccessStudent() {
    if (!this.isAuthenticatedStudent()) {
      this.route.navigate(['/login']);
    }
  }

  storeAccessAdmin(value: any) {
    sessionStorage.setItem('AllowAdmin', value);

    if (this.isAuthenticatedAdmin()) {
      this.route.navigate(['/admindashboard']);
    }
  }

  storeAccessStudent(value: any) {
    sessionStorage.setItem('AllowStudent', value);

    if (this.isAuthenticatedStudent()) {
      this.route.navigate(['/studentdashboard']);
    }
  }

  loginAccess(value:any) {
    sessionStorage.setItem('AllowStudent', value);
    sessionStorage.setItem('AllowAdmin', value);
    sessionStorage.removeItem('USERNAME');
    sessionStorage.removeItem('ID');
  }

  popUpAccess() : boolean {
    if (
      sessionStorage.getItem('PopUp') != null &&
      sessionStorage.getItem('PopUp') == 'true'
    ) {
      return true;
    } else {
      return false;
    }
  }

  onExportClick(fileName:String, data:any):void {
    const workSheet: xlsx.WorkSheet = xlsx.utils.table_to_sheet(data);
    const workBook: xlsx.WorkBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(workBook, workSheet, 'Sheet1');
    xlsx.writeFile(workBook, fileName+'.xlsx');
  }

}
