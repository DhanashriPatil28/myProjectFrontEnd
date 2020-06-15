import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {


  private user: SocialUser;
  private loggedIn: boolean;
  user1 = new User();
   
 
  constructor(private authService: AuthService, private router: Router) { }
 
  ngOnInit() {
    this.authService.authState.subscribe((user) => {

      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
      console.log("hello");
    });
  }
 
  spin = false;
  signInWithGoogle(): void {
   
      let vm: any = this;
        this.spin = false;

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      userData => {
        this.user1.email = userData.email;
        this.user1.id = userData.id;
        this.user1.name = userData.name;
        console.log(this.user1);
        
        vm.spin = (userData != null);
        console.log(vm.spin);
        this.router.navigate(['/home']);
        
      }
    )
    
  }

  signOut(): void {
    this.authService.signOut();
  }
}
