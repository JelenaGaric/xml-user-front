import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { LoginRegService } from '../services/login-reg-service/login-reg.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
  user: User = new User();


  constructor(private _loginRegService: LoginRegService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
  }

  logIn() {
    console.log(this.user);
    this._loginRegService.getUser(this.user)
    .subscribe( data => {
      console.log(data);
      localStorage.setItem("loggedIn", JSON.stringify(data));
        if(data.roleType == "BASIC_USER"){
          this.router.navigate(['user']);
        }
        else {
          this.router.navigate(['admin']);
        }
      },
      error => alert("Wrong username or password.")
    );
  }

}
