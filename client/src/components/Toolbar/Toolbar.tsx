import cx from 'classnames';
import { ToolbarProps } from './types';

export const Toolbar = ({
  blockUsers,
  deleteUsers,
  unblockUsers,
}: ToolbarProps) => {
  const btnClasses = 'px-4 py-2 rounded-md';
  return (
    <div className="flex space-x-5 text-white">
      <button className={cx(btnClasses, 'bg-amber-300 ')} onClick={blockUsers}>
        Block
      </button>
      <button className={cx(btnClasses, 'bg-cyan-500')} onClick={unblockUsers}>
        Unblock
      </button>
      <button className={cx(btnClasses, 'bg-red-500')} onClick={deleteUsers}>
        Delete
      </button>
    </div>
  );
};
