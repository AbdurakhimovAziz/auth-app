import { useNavigate } from 'react-router-dom';
import {
  useUserContext,
  useUserUpdateContext,
} from '../../context/UserContext';
import { removeTokenFromStorage } from '../../utils/token';
import { removeUserFromStorage } from '../../utils/user';

export const Header = () => {
  const user = useUserContext();
  const setUser = useUserUpdateContext();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    removeTokenFromStorage();
    removeUserFromStorage();
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center text-white bg-teal-400 px-8 py-5">
      <h1>User Management System</h1>
      <div className="flex items-center space-x-4">
        <span className="text-2xl">{user?.name} </span>
        <button
          className="p-2 border rounded-sm transition-colors"
          onClick={logout}
        >
          logout
        </button>
      </div>
    </header>
  );
};
