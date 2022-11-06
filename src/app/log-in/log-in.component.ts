import { Component, OnInit } from '@angular/core';
import { LogInViewModel } from '../log-in-view-model';
import { Router } from '@angular/router';
import { LoginService } from '../log-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LoginComponent implements OnInit
{
  loginViewModel: LogInViewModel = new LogInViewModel();
  loginError: string = "";

  constructor(private loginService:LoginService, private router: Router)
  {
  }

  ngOnInit()
  {
  }

  onLoginClick(event: any)
  {
    this.loginService.Login(this.loginViewModel).subscribe({
    next:  () =>
      {
        this.router.navigateByUrl("/dashboard");
      },
    error:  (error: any) =>
      {
        console.log(error);
        this.loginError = "Invalid Username or Password";
      },
     } );
  }

}
