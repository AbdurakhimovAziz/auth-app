import { createBrowserRouter } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: 'register',
    Component: RegisterPage,
  },
  {
    path: 'login',
    Component: LoginPage,
  },
]);
