export class User{
  id:number;
  APM:number;//APM = Arithos Panepistimiakou Mitroou
  name:string;
  surname:string;
  username:string;

  constructor(id: number, APM: number, name: string, surname: string, username: string) {
    this.id = id;
    this.APM = APM;
    this.name = name;
    this.surname = surname;
    this.username = username;
  }
}
