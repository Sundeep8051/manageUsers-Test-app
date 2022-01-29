import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { manageUsersService } from '../manageUsers.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() inactiveUsers:string[] = [];
  usersCount:number = 0;
  //@Output() makeUsersActive = new EventEmitter<number>();

  constructor(private manageUsers:manageUsersService, private counterService:CounterService) { 
    this.counterService.inactiveCount.subscribe(
      (count:number)=>{this.usersCount = count}
    );
  }

  ngOnInit(): void {
    this.usersCount = this.inactiveUsers.length;
  }

  onInactiveUserClicked(id:number){
    //this.makeUsersActive.emit(id);
    this.manageUsers.addToActiveRows(id);
  }

}
