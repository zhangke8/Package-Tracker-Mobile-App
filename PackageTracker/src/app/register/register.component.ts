import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';
import { TokenPayload } from '../authentication/tokenpayload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.credentials = {email: '', name: '', password : '' };
  }

  register() {
    this.auth.register(this.credentials).subscribe(data => {
      this.router.navigateByUrl('/createorder');
    }, (err) => {
      console.error(err);
    });
  }

}
