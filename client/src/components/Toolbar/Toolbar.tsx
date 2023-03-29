import cx from 'classnames';

export const Toolbar = () => {
  const btnClasses = 'px-4 py-2 rounded-md';
  return (
    <div className="flex space-x-5 text-white">
      <button className={cx(btnClasses, 'bg-amber-300 ')}>Block</button>
      <button className={cx(btnClasses, 'bg-cyan-500')}>Unblock</button>
      <button className={cx(btnClasses, 'bg-red-500')}>Delete</button>
    </div>
  );
};
