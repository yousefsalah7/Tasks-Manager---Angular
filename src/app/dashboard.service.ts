import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  static GetTeamMember: any;

  constructor() { }

  GetTeamMember(){
    let TeamMembers=[
      {Region:"East",TeamCount:10,Availablemembers:3},
      {Region:"Weast",TeamCount:10,Availablemembers:5},
      {Region:"north",TeamCount:10,Availablemembers:6},
      {Region:"south",TeamCount:10,Availablemembers:0}
    ];
    return TeamMembers;
  }
}
