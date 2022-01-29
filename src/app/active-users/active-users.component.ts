import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { manageUsersService } from '../manageUsers.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() activeUsers : string[] = [];
  usersCount:number = 0;
  //@Output() makeUserInactive = new EventEmitter<number>();
  constructor(private manageUsers:manageUsersService, private counterService:CounterService) { 
    this.counterService.activeCount.subscribe(
      (count:number)=>{ this.usersCount = count}
    )
  }

  ngOnInit(): void {
    this.usersCount = this.activeUsers.length;
  }

  onActiveUserClicked(id:number){
    //this.makeUserInactive.emit(id);
    this.manageUsers.addToInactiveRows(id);
  }

}
