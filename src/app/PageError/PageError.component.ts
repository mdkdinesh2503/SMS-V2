import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-PageError',
  templateUrl: './PageError.component.html',
  styleUrls: ['./PageError.component.css']
})
export class PageErrorComponent implements OnInit {

  constructor(private location:Location) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
