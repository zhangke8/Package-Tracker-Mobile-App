import { Component, OnInit } from '@angular/core';
import { TokenPayload } from '../authentication/tokenpayload';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload;
  constructor(private auth: AuthenticationService, private router: Router) { }
  ngOnInit() {
    this.credentials = {email: '', name: '', password : '' };
  }
  login() {
    this.auth.login(this.credentials).subscribe(data => {
      this.router.navigateByUrl('/createorder');
    }, (err) => {
      console.error(err);
    });
  }
}
