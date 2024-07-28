import { useCreateUser } from '@/hooks/useCreateUser';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import {
  CreateUserForm,
  CreateUserFormRef,
  CreateUserFormValues,
} from './CreateUserForm';

export type CreateUserDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateUserDialog({
  open,
  onClose,
}: CreateUserDialogProps) {
  const theme = useTheme();
  const formRef = useRef<CreateUserFormRef>(null);

  const { mutate, isPending } = useCreateUser({
    onSuccess: () => {
      toast.success('User created successfully');
      onClose();
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });

  const onSubmit = async (values: CreateUserFormValues): Promise<void> => {
    mutate(values);
  };

  const onAddClick = () => {
    formRef.current?.submitForm(onSubmit);
  };

  return (
    <Dialog onClose={onClose} open={open} fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Create User
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>
        <CreateUserForm formRef={formRef} />
      </DialogContent>

      <DialogActions>
        <Button disabled={isPending} onClick={onAddClick}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
