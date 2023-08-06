import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';
import { NGXLogger} from 'ngx-logger';
import { NavbarComponent } from '../Navbar/Navbar.component';
import { FooterComponent } from '../Footer/Footer.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let authService: AuthService;
  let loginService: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent, NavbarComponent, FooterComponent],
      imports:[HttpClientModule, RouterOutlet, ReactiveFormsModule],
      providers: [AuthService, LoginService]
    }).compileComponents();
    // mockLoginService
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    loginService = TestBed.inject(LoginService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [AboutComponent],
    providers: [
      {
        provide: NGXLogger,
        useValue: {
          // Create a mock of NGXLogger if needed
        },
      },
    ],
  }).compileComponents();
});
