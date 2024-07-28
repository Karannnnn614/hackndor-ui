import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { FormGroupProps } from '@mui/material/FormGroup';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import type { ReactNode } from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

type Option = FormControlLabelProps;

export type CheckboxFieldOptions = Option[];

export type CheckboxFieldProps<TFieldValues extends FieldValues> =
  FormGroupProps &
    UseControllerProps<TFieldValues> & {
      label: ReactNode;
      options: CheckboxFieldOptions;
    };

export const CheckboxField = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  disabled,
  label,
  options,
  ...rest
}: CheckboxFieldProps<TFieldValues>) => {
  const { field } = useController<TFieldValues>({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
  });

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <FormGroup {...field} {...rest}>
        {options.map((option: Option, index: number) => (
          <FormControlLabel key={index} {...option} control={<Checkbox />} />
        ))}
      </FormGroup>
    </FormControl>
  );
};
