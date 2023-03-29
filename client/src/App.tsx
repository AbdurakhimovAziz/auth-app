import { useState } from 'react';
import { Navigate, RouterProvider, useRoutes } from 'react-router-dom';
import { UserContext, UserUpdateContext } from './context/UserContext';
import { IUser } from './interfaces/user';
import { router } from './router';

export const App = () => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        <RouterProvider router={router} />
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};
