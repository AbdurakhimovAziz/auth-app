import { useUserUpdateContext } from '../../context/UserContext';

export const Header = () => {
  const setUser = useUserUpdateContext();
  const logout = () => {
    setUser(null);
  };

  return (
    <header className="flex justify-between items-center text-white bg-teal-400 px-8 py-5">
      <h1>User Management System</h1>
      <button
        className="p-2 border rounded-sm transition-colors"
        onClick={logout}
      >
        logout
      </button>
    </header>
  );
};
