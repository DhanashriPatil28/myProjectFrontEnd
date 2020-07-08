import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  user1 = new User();
  public isCollapsed6: boolean = false;
  public isCollapsed7: boolean = false;
  public spin: boolean = false;
 
  constructor(private authService: AuthService, private router: Router, private service: UserService) { }
 
  ngOnInit() {
    this.authService.authState.subscribe((user) => {

      this.user = user;
      this.loggedIn = (user != null);
    });
  }
 
  signInWithGoogle(): void {
    this.isCollapsed6 = !this.isCollapsed6;
    this.spin = true;
    
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      userData => {
        const email = userData.email.toLocaleLowerCase();
          this.user1.email = userData.email;
          this.user1.id = userData.id;
          this.user1.name = userData.name;
          console.log(this.user1);
          
          this.service.SaveUser(this.user1).subscribe(user => {
            this.user1=user;
          });
      
        this.router.navigate(['/home']);
        
      }
    )
    
  }

  signOut(): void {
    this.isCollapsed7 = !this.isCollapsed7;
    this.authService.signOut();
  }

}
