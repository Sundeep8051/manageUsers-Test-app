import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class manageUsersService{
    activeUsers = ["Manuel", "Sara"];
    inactiveUsers = ["James", "Jane"];

    constructor(private counterService: CounterService){
    }
    
    addToInactiveRows(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id,1);
        this.counterService.activeCount.emit(this.activeUsers.length);
        this.counterService.inactiveCount.emit(this.inactiveUsers.length);
  }

  addToActiveRows(id:number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
    this.counterService.activeCount.emit(this.activeUsers.length);
    this.counterService.inactiveCount.emit(this.inactiveUsers.length);
  }

}