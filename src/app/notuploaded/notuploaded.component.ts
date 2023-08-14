import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-notuploaded',
  templateUrl: './notuploaded.component.html',
  styleUrls: ['./notuploaded.component.css'],
})
export class NotuploadedComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {
    this.checkMaintanence();
  }

  checkMaintanence(): boolean {
    if (!environment.maintanence) {
      this.route.navigate(['/frontpage']);
      return false;
    } else {
      return true;
    }
  }
}
