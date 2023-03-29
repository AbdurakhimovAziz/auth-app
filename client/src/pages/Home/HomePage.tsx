import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { Toolbar } from '../../components/Toolbar';
import { IUser } from '../../interfaces/user';
import { getUsers } from '../../mocks/getUsers';
import { users } from '../../mocks/users';

export const HomePage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
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
