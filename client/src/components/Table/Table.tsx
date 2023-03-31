import { TableProps } from './types';

export const Table = ({ users, selectedIds, setSelectedIds }: TableProps) => {
  const headers = ['ID', 'Name', 'Email', 'Registered', 'Login', 'Status'];
  const isCkeckboxChecked = (id: number) => selectedIds.includes(id);

  const checkAll = () => {
    if (selectedIds.length === users.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(users.map((user) => user.id));
    }
  };

  const handleCheckboxChange = (id: number) => {
    if (isCkeckboxChecked(id)) {
      setSelectedIds((prev) => prev.filter((prevId) => prevId !== id));
    } else {
      addUserToSelected(id);
    }
  };

  const addUserToSelected = (id: number) => {
    setSelectedIds((prev) => [...prev, id]);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 shadow-md sm:rounded-lg">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={selectedIds.length === users.length}
                  onChange={checkAll}
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>

            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {users.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={isCkeckboxChecked(user.id)}
                    onChange={() => handleCheckboxChange(user.id)}
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>

              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.id}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.name}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.email}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {new Date(user.registerTime).toLocaleDateString()}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.loginTime
                  ? new Date(user.loginTime).toLocaleString()
                  : '-'}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
