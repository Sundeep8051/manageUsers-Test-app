import { EventEmitter } from "@angular/core";
import { manageUsersService } from "./manageUsers.service";

export class CounterService{
    activeUsers : number = 0;
    inactiveUsers  : number = 0;

    activeCount = new EventEmitter<number>();
    inactiveCount = new EventEmitter<number>();

}