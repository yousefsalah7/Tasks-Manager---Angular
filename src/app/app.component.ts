import { Component } from '@angular/core';
import { LoginService } from './log-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   *
   */
  constructor(public logiservice:LoginService) {


  }
  title = 'TaskManager';
}
