import { Component, OnInit } from '@angular/core';
import { manageUsersService } from './manageUsers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [manageUsersService]
})
export class AppComponent implements OnInit {


  constructor(private manageUsers: manageUsersService){
    
  }

  activeUsers: string[]=[];
  inactiveUsers: string[]=[];
  ngOnInit(): void {
    this.activeUsers = this.manageUsers.activeUsers;
    this.inactiveUsers = this.manageUsers.inactiveUsers;
  }
  title = 'testApp';

  

}
