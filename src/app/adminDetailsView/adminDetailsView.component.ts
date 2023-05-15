import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UpdateService } from '../Update.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-AdminDetailsView',
  templateUrl: './AdminDetailsView.component.html',
  styleUrls: ['./AdminDetailsView.component.css'],
})
export class AdminDetailsViewComponent implements OnInit {
  constructor(
    private route: Router,
    private acRoute: ActivatedRoute,
    private service: LoginService,
    private updateService: UpdateService,
    private datepipe:DatePipe,
    private auth:AuthService
  ) {}

  values: any;

  detailsFromStudent: any = '';

  names: any;
  dobs: any;
  emls: any;
  mbls: any;
  gndrs: any;
  marstas: any;
  ages: any;
  cmtys: any;
  cstes: any;
  addtys: any;
  artys: any;
  ctrys: any;
  appnos: any;
  adr1s: any;
  adr2s: any;
  citys: any;
  pncds: any;
  states: any;
  ttlmens: any;
  firgrds: any;
  incs: any;
  fthrnas: any;
  fthrocs: any;
  fthrmos: any;
  mthrnas: any;
  mthrocs: any;
  mthrmos: any;
  rgtrs: any;
  degrs: any;
  deprts: any;
  clgnas: any;
  yrpsss: any;
  yrstus: any;
  mtens: any;
  mtenmos: any;
  mtenttls: any;
  mtws: any;
  mtwmos: any;
  mtwttls: any;

  ngOnInit() {

    this.auth.canAccessAdmin();

    this.acRoute.params.subscribe((params) => {
      this.values = params['id'];
    });

    this.service.getStudentDetails().subscribe((data) => {
      this.detailsFromStudent = data;
      this.names = this.detailsFromStudent[this.values - 1].NAME;
      this.dobs = this.detailsFromStudent[this.values - 1].DATE_OF_BIRTH;
      this.emls = this.detailsFromStudent[this.values - 1].EMAIL;
      this.mbls = this.detailsFromStudent[this.values - 1].MOBILE_NUMBER;
      this.gndrs = this.detailsFromStudent[this.values - 1].GENDER;
      this.marstas = this.detailsFromStudent[this.values - 1].MARITAL_STATUS;
      this.ages = this.detailsFromStudent[this.values - 1].AGE;
      this.cmtys = this.detailsFromStudent[this.values - 1].COMMUNITY;
      this.cstes = this.detailsFromStudent[this.values - 1].CASTE;
      this.addtys = this.detailsFromStudent[this.values - 1].ADDRESS_TYPE;
      this.artys = this.detailsFromStudent[this.values - 1].AREA_TYPE;
      this.ctrys = this.detailsFromStudent[this.values - 1].COUNTRY;
      this.appnos = this.detailsFromStudent[this.values - 1].APPARTMENT_NUMBER;
      this.adr1s = this.detailsFromStudent[this.values - 1].ADDRESS_LINE_1;
      this.adr2s = this.detailsFromStudent[this.values - 1].ADDRESS_LINE_2;
      this.citys = this.detailsFromStudent[this.values - 1].CITY;
      this.pncds = this.detailsFromStudent[this.values - 1].PINCODE;
      this.states = this.detailsFromStudent[this.values - 1].STATE;
      this.ttlmens =
        this.detailsFromStudent[this.values - 1].TOTAL_FAMILY_MEMBERS;
      this.firgrds = this.detailsFromStudent[this.values - 1].FIRST_GRADUATE;
      this.incs = this.detailsFromStudent[this.values - 1].TOTAL_INCOME;
      this.fthrnas = this.detailsFromStudent[this.values - 1].FATHER_NAME;
      this.fthrocs = this.detailsFromStudent[this.values - 1].FATHER_OCCUPATION;
      this.fthrmos =
        this.detailsFromStudent[this.values - 1].FATHER_MOBILE_NUMBER;
      this.mthrnas = this.detailsFromStudent[this.values - 1].MOTHER_NAME;
      this.mthrocs = this.detailsFromStudent[this.values - 1].MOTHER_OCCUPATION;
      this.mthrmos =
        this.detailsFromStudent[this.values - 1].MOTHER_MOBILE_NUMBER;
      this.rgtrs = this.detailsFromStudent[this.values - 1].REGISTER_NUMBER;
      this.degrs = this.detailsFromStudent[this.values - 1].STUDENT_DEGREE;
      this.deprts = this.detailsFromStudent[this.values - 1].STUDENT_DEPARTMENT;
      this.clgnas =
        this.detailsFromStudent[this.values - 1].STUDENT_COLLEGE_NAME;
      this.yrpsss = this.detailsFromStudent[this.values - 1].YEAR_OF_PASSING;
      this.yrstus = this.detailsFromStudent[this.values - 1].YEAR_OF_STUDING;
      this.mtens = this.detailsFromStudent[this.values - 1].TENTH_MARK;
      this.mtenmos = this.detailsFromStudent[this.values - 1].TENTH_STUDY_MODE;
      this.mtenttls = this.detailsFromStudent[this.values - 1].TENTH_TOTAL_MARK;
      this.mtws = this.detailsFromStudent[this.values - 1].TWELTH_MARK;
      this.mtwmos = this.detailsFromStudent[this.values - 1].TWELTH_STUDY_MODE;
      this.mtwttls = this.detailsFromStudent[this.values - 1].TWELTH_TOTAL_MARK;
    });

    console.log('id : ' + this.values);
  }

  goBack() {
    this.route.navigate(['/admindetails']);
  }

  submitList(
    name: any,
    dob: any,
    eml: any,
    mbl: any,
    gndr: any,
    marsta: any,
    age: any,
    cmty: any,
    cste: any,
    addty: any,
    arty: any,
    ctry: any,
    appno: any,
    adr1: any,
    adr2: any,
    city: any,
    pncd: any,
    state: any,
    ttlmen: any,
    firgrd: any,
    inc: any,
    fthrna: any,
    fthroc: any,
    fthrmo: any,
    mthrna: any,
    mthroc: any,
    mthrmo: any,
    rgtr: any,
    degr: any,
    deprt: any,
    clgna: any,
    yrpss: any,
    yrstu: any,
    mten: any,
    mtenmo: any,
    mtenttl: any,
    mtw: any,
    mtwmo: any,
    mtwttl: any
  ) {

    var body = {
      NAME: name,
      DATE_OF_BIRTH: dob,
      EMAIL: eml,
      MOBILE_NUMBER: mbl,
      GENDER: gndr,
      MARITAL_STATUS: marsta,
      AGE: age,
      COMMUNITY: cmty,
      CASTE: cste,
      ADDRESS_TYPE: addty,
      AREA_TYPE: arty,
      COUNTRY: ctry,
      APPARTMENT_NUMBER: appno,
      ADDRESS_LINE_1: adr1,
      ADDRESS_LINE_2: adr2,
      CITY: city,
      PINCODE: pncd,
      STATE: state,
      TOTAL_FAMILY_MEMBERS: ttlmen,
      FIRST_GRADUATE: firgrd,
      TOTAL_INCOME: inc,
      FATHER_NAME: fthrna,
      FATHER_OCCUPATION: fthroc,
      FATHER_MOBILE_NUMBER: fthrmo,
      MOTHER_NAME: mthrna,
      MOTHER_OCCUPATION: mthroc,
      MOTHER_MOBILE_NUMBER: mthrmo,
      REGISTER_NUMBER: rgtr,
      STUDENT_DEGREE: degr,
      STUDENT_DEPARTMENT: deprt,
      STUDENT_COLLEGE_NAME: clgna,
      YEAR_OF_PASSING: yrpss,
      YEAR_OF_STUDING: yrstu,
      TENTH_MARK: mten,
      TENTH_STUDY_MODE: mtenmo,
      TENTH_TOTAL_MARK: mtenttl,
      TWELTH_MARK: mtw,
      TWELTH_STUDY_MODE: mtwmo,
      TWELTH_TOTAL_MARK: mtwttl,
    };

    this.updateService.updateAdminData(body, this.values).subscribe((data) => {
      alert('Updated Successfully');
    });

  }
}
