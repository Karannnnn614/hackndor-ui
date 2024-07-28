import type { User } from '@/types/user';
import type { GridColDef } from '@mui/x-data-grid';

export const useUserListDataGridColumns = () => {
  const columns: GridColDef<User>[] = [
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 150 },
  ];

  return columns;
};
