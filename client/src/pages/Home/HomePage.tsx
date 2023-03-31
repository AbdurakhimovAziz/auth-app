import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  blockUsersByIds,
  deleteUsersByIds,
  getAllUsers,
  unblockUsersByIds,
} from '../../api/users';
import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { Toolbar } from '../../components/Toolbar';
import { useUserUpdateContext } from '../../context/UserContext';
import { IUser } from '../../interfaces/user';
import { getTokenFromStorage } from '../../utils/token';
import { getUserFromStorage } from '../../utils/user';

export const HomePage = () => {
  const isLoggedIn = getTokenFromStorage();
  const user = getUserFromStorage();
  const saveUser = useUserUpdateContext();

  if (!isLoggedIn || !user) {
    return <Navigate to="login" replace />;
  }

  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const resetSelectedIds = () => {
    setSelectedIds([]);
  };

  const refreshUsers = () => {
    getAllUsers().then((users) => setUsers(users));
  };

  const blockUsers = async () => {
    if (selectedIds.length) {
      await blockUsersByIds(selectedIds);
      refreshUsers();
      resetSelectedIds();
    }
  };

  const unblockUsers = async () => {
    if (selectedIds.length) {
      await unblockUsersByIds(selectedIds);
      refreshUsers();
      resetSelectedIds();
    }
  };

  const deleteUsers = async () => {
    if (selectedIds.length) {
      await deleteUsersByIds(selectedIds);
      refreshUsers();
      resetSelectedIds();
    }
  };

  useEffect(() => {
    saveUser(user);
    refreshUsers();
  }, []);

  return (
    <>
      <Header />
      <main className="px-5 py-10">
        <div className="mb-8">
          <Toolbar
            blockUsers={blockUsers}
            deleteUsers={deleteUsers}
            unblockUsers={unblockUsers}
          />
        </div>
        <Table
          users={users}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
        />
      </main>
    </>
  );
};
