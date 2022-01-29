export class manageUsersService{
    activeUsers = ["Manuel", "Sara"];
    inactiveUsers = ["James", "Jane"];

   
  addToInactiveRows(id:number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
  }

  addToActiveRows(id:number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
  }

}