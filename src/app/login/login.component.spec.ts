import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { LoginComponent } from "../login/login.component";
import { SocialLoginModule, AuthServiceConfig , AuthService , GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from '../user.service';
import {User} from '../User';
import { HttpClientTestingModule } from '@angular/common/http/testing';

var sinon = require("sinon");

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1035169042249-taca4m0o66a59fl0i38jt5sge7f5tdjm.apps.googleusercontent.com")
  }
]);
 
export function provideConfig() {
  return config;
}

describe("UserService", () => {
  let originalTimeout;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[RouterTestingModule, HttpClientTestingModule],
      declarations: [LoginComponent],
      providers: [AuthService, UserService, SocialLoginModule ,
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
          }
    ]
    }).compileComponents();
  }));


  describe(":", () => {

    const badUser = new User()

    badUser.email = 'dhanashrimaruti.patil@accoliteindia.com'
    badUser.id = 'id'
    badUser.name = 'xyz'

    function setupTestBed() {
        const injector = getTestBed();

        return injector.get(AuthService);
      }

     
    function setup() {
      const component = TestBed.createComponent(LoginComponent);
      return component;
    }

      it('User should login successfully', () => {
        const component = setup();
        const app = component.debugElement.componentInstance;
        const authService = setupTestBed();

        var post = sinon.stub(authService, "signIn").resolves(badUser);
        app.signInWithGoogle();

        expect(app.spin).toEqual(true);
        post.restore();
      });

      it('should toggle #isCollapsed6', () => {
        const component = setup();
        const app = component.debugElement.componentInstance;
        const authService = setupTestBed();
        var post = sinon.stub(authService, "signIn").resolves(badUser);
        expect(app.isCollapsed6).toBe(false, 'off at first');
        app.signInWithGoogle();
        expect(app.isCollapsed6).toBe(true, 'on at first');

      });

      it('User should login successfully', () => {
        const component = setup();
        const app = component.debugElement.componentInstance;
        const authService = setupTestBed();
        var post = sinon.stub(authService, "signIn").resolves(badUser);
        expect(app.isCollapsed7).toBe(false, 'off at first');
        app.signOut();
        expect(app.isCollapsed7).toBe(true, 'on at first');
      });


  });
});