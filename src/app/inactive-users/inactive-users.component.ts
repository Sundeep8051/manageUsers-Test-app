import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { manageUsersService } from '../manageUsers.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() inactiveUsers:string[] = [];
  //@Output() makeUsersActive = new EventEmitter<number>();

  constructor(private manageUsers:manageUsersService) { }

  ngOnInit(): void {
  }

  onInactiveUserClicked(id:number){
    //this.makeUsersActive.emit(id);
    this.manageUsers.addToActiveRows(id);
  }

}
