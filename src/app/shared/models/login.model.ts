export class UserLogin {
  constructor(
    public email: string,
    public password: string,
  ) {  }
}
export class UserRegister {
  constructor(
    public name: string,
    public email: string,
    public old_password: string,
    public password: string,
    public password_confirmation: string
  ) {}
}
