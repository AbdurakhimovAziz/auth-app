import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAllUsers } from '../../api/uesrs';
import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { Toolbar } from '../../components/Toolbar';
import { useUserContext } from '../../context/UserContext';
import { IUser } from '../../interfaces/user';
import { getToken } from '../../utils/token';

export const HomePage = () => {
  const isLoggedIn = getToken();

  if (!isLoggedIn) {
    return <Navigate to="login" replace />;
  }

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getAllUsers().then((users) => setUsers(users));
  }, []);

  return (
    <>
      <Header />
      <main className="px-5 py-10">
        <div className="mb-8">
          <Toolbar />
        </div>
        <Table users={users} />
      </main>
    </>
  );
};
