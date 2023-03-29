import { IUser } from '../interfaces/user';

export const users: IUser[] = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@localhost',
    status: 'active',
    loginTime: '2020-01-01T00:00:00.000Z',
    registerTime: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    name: 'User',
    email: 'user@localhost',
    status: 'active',
    loginTime: '2020-01-01T00:00:00.000Z',
    registerTime: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '3',
    name: 'Blocked',
    email: 'blocked@localhost',
    status: 'blocked',
    loginTime: '2020-01-01T00:00:00.000Z',
    registerTime: '2020-01-01T00:00:00.000Z',
  },
];
