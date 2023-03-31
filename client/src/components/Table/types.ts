import { IUser } from '../../interfaces/user';

export type TableProps = {
  users: IUser[];
  selectedIds: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
};
