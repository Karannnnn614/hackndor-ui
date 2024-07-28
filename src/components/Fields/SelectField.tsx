import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import type { MenuItemProps } from '@mui/material/MenuItem';
import MenuItem from '@mui/material/MenuItem';
import type { SelectProps } from '@mui/material/Select';
import Select from '@mui/material/Select';
import type { ReactNode } from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

type Option = MenuItemProps & {
  label: ReactNode;
  value: number | string;
};

export type SelectFieldOptions = Option[];

export type SelectFieldProps<TFieldValues extends FieldValues> = SelectProps &
  UseControllerProps<TFieldValues> & {
    label: ReactNode;
    options: SelectFieldOptions;
    helperText?: ReactNode;
  };

export const SelectField = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  disabled,
  label,
  options,
  error,
  helperText,
  ...rest
}: SelectFieldProps<TFieldValues>) => {
  const { field } = useController<TFieldValues>({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
  });

  return (
    <FormControl error={error}>
      <InputLabel>{label}</InputLabel>

      <Select {...field} label={label} {...rest} error={error}>
        {options.map((option: Option, index: number) => (
          <MenuItem key={index} {...option}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
