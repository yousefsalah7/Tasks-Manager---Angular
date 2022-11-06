import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private _DashboardService :DashboardService) { }
  Designation:string;
  UserName:string;
  NUmberOfTeamMembers:number;
  TotalCostOfAllProjects:number;
  PendingTasks:number;
  UpComingProjects:number;
  ProjectCost:number;
  AvailableFunds:number;
  CurrentExpenditure:number;

  Clients:string[];
  Projects:string[];
  Years:number[];
  TeamMembers:any[];
  TeamMembersSummary:any[];
  Dropdown:string;
  ToDay:Date;


  ngOnInit(): void {

    this.Designation="Team Leader";
    this.UserName="John Smith";
    this.TotalCostOfAllProjects=123;
    this.NUmberOfTeamMembers=123;
    this.UpComingProjects=123;
    this.ProjectCost=0;
    this.AvailableFunds=0;
    this.CurrentExpenditure=0;
    this.PendingTasks=123;
    this.Dropdown="Select Project"
    this.Clients=["ABC Infotech Ltd.","DEF Software Solutions","GHI Industries"];
    this.Projects=["Project A","Project B","Project C","Project D"];
    this.ToDay=new Date;
    this.TeamMembersSummary=this._DashboardService.GetTeamMember();
  }

  onProjectChange($event:any){
      alert("you click project "+ $event.target.innerHTML)
      switch ($event.target.innerHTML) {
        case "Project A":
          this.ProjectCost=0.000 ;
          this.AvailableFunds=0.00;
          this.CurrentExpenditure=0.0;
          this.Dropdown="Project A"
          break;
        case "Project B":
          this.ProjectCost=0.1111 ;
          this.AvailableFunds=0.1111;
          this.CurrentExpenditure=0.11111;
          this.Dropdown="Project B"
          break;
        case "Project C":
          this.ProjectCost=0.2222 ;
          this.AvailableFunds=0.02220;
          this.CurrentExpenditure=0.2220;
          this.Dropdown="Project C"
          break;
        case "Project D":
          this.ProjectCost=0.033330 ;
          this.AvailableFunds=0.003333;
          this.CurrentExpenditure=0.3330;
          this.Dropdown="Project D"
          break;

        default:
          break;
      }
  }

}
