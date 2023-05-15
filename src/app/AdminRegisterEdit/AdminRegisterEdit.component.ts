import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UpdateService } from '../Update.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-AdminRegisterEdit',
  templateUrl: './AdminRegisterEdit.component.html',
  styleUrls: ['./AdminRegisterEdit.component.css'],
})
export class AdminRegisterEditComponent implements OnInit {
  constructor(
    private route: Router,
    private acRoute: ActivatedRoute,
    private service: LoginService,
    private updateService:UpdateService,
    private auth:AuthService
  ) {}

  values: any;

  registerListFromStudent: any = '';

  userName: any;
  email: any;
  password: any;
  confirmPassword: any;

  ngOnInit() {

    this.auth.canAccessAdmin();

    this.acRoute.params.subscribe((params) => {
      this.values = params['id'];
    });

    this.service.getRegisterDetails().subscribe((data) => {
      this.registerListFromStudent = data;
      this.userName = this.registerListFromStudent[this.values-1].USERNAME;
      this.email = this.registerListFromStudent[this.values-1].EMAIL;
      this.password = this.registerListFromStudent[this.values-1].PASSWORD;
      this.confirmPassword = this.registerListFromStudent[this.values-1].CONFIRMPASSWORD;
    });

    console.log('id : ' + this.values);
  }

  goBack() {
    this.route.navigate(['/adminregisterlist']);
  }

  submitList(us:any,em:any,ps:any,cps:any) {

    var body = {
      USERNAME : us,
      EMAIL : em,
      PASSWORD : ps,
      CONFIRMPASSWORD : cps
    }

    this.updateService.updateRegisterData(body,this.values).subscribe((data) => {
      alert("Updated Successfully");
    });
  }
}
