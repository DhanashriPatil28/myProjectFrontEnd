import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { TrainingHomeComponent} from '../training-home/training-home.component';
import { CourseHomeComponent } from '../course-home/course-home.component';
import { Login1Component } from '../login1/login1.component';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialLoginModule, AuthServiceConfig , AuthService , GoogleLoginProvider, SocialUser } from "angularx-social-login";


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


describe("Component: Login to Google", () => {
  //let originalTimeout;

  beforeEach(async(() => {
   // originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    //jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    TestBed.configureTestingModule({
        imports:[RouterTestingModule],
      declarations: [Login1Component],
      providers: [AuthService, SocialLoginModule ,
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
          }
    ]
    }).compileComponents();
  }));


  afterEach(function() {
    //jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
   
  });
 
  afterAll(function() {
    console.log('Done: Component Login to Google')

  });


  describe(":", () => {

    const user = new SocialUser()

    user.email = 'dhanashrimaruti.patil@accoliteindia.com'
    user.id = 'id'

    function setupTestBed() {
        const injector = getTestBed();

        return injector.get(AuthService);
      }

     
    function setup() {
      const component = TestBed.createComponent(Login1Component);
      return component;
    }

      it('User selected a non-company email', done => {

        const component = setup();
        const app = component.debugElement.componentInstance;
        const authService = setupTestBed();

        var post = sinon.stub(authService, "signIn").resolves(user);
        app.signInWithGoogle();
   
      });


  });
});