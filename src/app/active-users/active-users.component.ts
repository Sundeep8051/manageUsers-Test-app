import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { manageUsersService } from '../manageUsers.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() activeUsers : string[] = [];
  //@Output() makeUserInactive = new EventEmitter<number>();
  constructor(private manageUsers:manageUsersService) { }

  ngOnInit(): void {
  }

  onActiveUserClicked(id:number){
    //this.makeUserInactive.emit(id);
    this.manageUsers.addToInactiveRows(id);
  }

}
