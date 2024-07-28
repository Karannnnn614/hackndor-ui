import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import type { JSX } from 'react';

import { useGetUserList } from '@/hooks/useGetUserList';
import { User } from '@/types/user';
import { useUserListDataGridColumns } from './useUserListDataGridColumns';

export function UserDataGrid(): JSX.Element {
  const { data, isPending } = useGetUserList();

  const columns = useUserListDataGridColumns();

  return (
    <DataGrid<User>
      rows={data}
      columns={columns}
      loading={isPending}
      slots={{
        toolbar: GridToolbar,
      }}
      autoHeight={false}
    />
  );
}
