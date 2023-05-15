import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-StudentNavbar',
  templateUrl: './StudentNavbar.component.html',
  styleUrls: ['./StudentNavbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  openPage() {
    if(confirm('You are Redirect to home page') == true) {
      this.route.navigate(['/home']);
    }
  }

}
