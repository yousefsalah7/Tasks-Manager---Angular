import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from '../projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from '../project.service';
import { TeamSizeValidatorDirective } from '../team-size-validator.directive';
import { ClientLocationStatusValidatorDirective } from '../client-location-status-validator.directive';
import { ProjectIDUniqueValidatorDirective } from '../project-idunique-validator.directive';
import { SignUpComponent } from '../sign-up/sign-up.component';
import {MatTreeModule} from '@angular/material/tree';



@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent,
    SignUpComponent,

    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTreeModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent,
    SignUpComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective,
  ],
  providers:[DashboardService,ProjectsService]
})
export class AdminModule { }
