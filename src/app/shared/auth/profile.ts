export class Profile {
  constructor(
    public name: string = null,
    public firstName: string = null,
    public lastName: string = null,
    public email: string = null,
    public isSysAdmin: boolean = null
  ) { }

  static fromJson(json: any) {
    if (!json) return;
    return new Profile(
      json.name,
      json.first_name,
      json.last_name,
      json.email,
      json.is_sys_admin
    );
  }

  toJson(stringify?: boolean): any {
    var doc = {
      name: this.name,
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      is_sys_admin: this.isSysAdmin
    };
    return stringify ? JSON.stringify(doc) : doc;
  }
}