import {User} from "./User";

export class Thesis{
  public thesisId:number;
  public title:String;
  public description:String;
  public isAssigned:boolean;
  public assigned_user: User;
  constructor(thesis_id:number,name:string,description:String, isAssigned:boolean, assigned_user:User) {
    this.thesisId = thesis_id;
    this.title = name;
    this.description = description;
    this.isAssigned = isAssigned;
    this.assigned_user = assigned_user;
  }
}
