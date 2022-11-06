import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CanActivateGuardService } from './can-active-guard.service';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { LoginComponent } from './log-in/log-in.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [

  {path:"dashboard",component:DashboardComponent,canActivate:[CanActivateGuardService],data:{expectedRole:"Admin"}},
  {path:"about",component:AboutComponent,canActivate:[CanActivateGuardService],data:{expectedRole:"Admin"}},
  {path:"projects",component:ProjectsComponent,canActivate:[CanActivateGuardService],data:{expectedRole:"Admin"}},
  {path:"LogIn",component:LoginComponent},
  {path:"SignUp",component:SignUpComponent},
  {path:"",redirectTo:"LogIn",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true}
  ],
})
export class AppRoutingModule {

 }
