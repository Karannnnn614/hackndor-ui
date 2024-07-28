import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Iconify } from '@/components/Iconify';

import { useState } from 'react';
import CreateUserDialog from './CreateUserDialog';
import { UserDataGrid } from './UserDataGrid';

export function UsersListPage() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Users</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleClickOpen}
        >
          New User
        </Button>
      </Stack>

      <Card>
        <UserDataGrid />
      </Card>
      <CreateUserDialog open={open} onClose={handleClose} />
    </Container>
  );
}
