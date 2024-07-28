import type { InputBaseProps } from '@mui/material/InputBase';
import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

export type InputFieldProps<TFieldValues extends FieldValues> = TextFieldProps &
  InputBaseProps &
  UseControllerProps<TFieldValues>;

export const InputField = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  disabled,
  ...rest
}: InputFieldProps<TFieldValues>) => {
  const { field } = useController<TFieldValues>({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
  });

  return <TextField fullWidth {...field} {...rest} />;
};
