import {User} from "./User";

export class Thesis{
  public name:String;
  public date:Date;
  public assigned:User;
  constructor(name:string,date:Date, assigned:User) {
    this.name = name;
    this.date = date;
    this.assigned = assigned;
  }
}
