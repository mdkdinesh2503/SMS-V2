import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notuploaded',
  templateUrl: './notuploaded.component.html',
  styleUrls: ['./notuploaded.component.css']
})
export class NotuploadedComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
