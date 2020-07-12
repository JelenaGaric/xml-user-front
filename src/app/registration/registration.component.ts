import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { LoginRegService } from '../services/login-reg-service/login-reg.service';
import { User } from '../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  user: User = new User();
  repeatPassword: string;

  constructor(private loginRegService: LoginRegService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
  }

  register() {
    if( this.user.password === this.repeatPassword) {  
      this.loginRegService.regUser(this.user)
        .subscribe( user => {
          console.log(user);
          alert('You are registrated! Please, log in.');
        },error => { 
          alert('User with that username already exist!')
        })
    } else  
      alert("Please, repeat your password. You have made mistake!")

  }

}

