export interface IUser {
  id: string;
  name: string;
  email: string;
  registrationTime: string;
  loginTime: string;
  status: 'active' | 'blocked';
}

export interface IUserWithPassword extends IUser {
  password: string;
}
