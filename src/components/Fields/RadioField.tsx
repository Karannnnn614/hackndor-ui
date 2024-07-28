import FormControl from '@mui/material/FormControl';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import type { RadioGroupProps } from '@mui/material/RadioGroup';
import RadioGroup from '@mui/material/RadioGroup';
import type { ReactNode } from 'react';
import { useController } from 'react-hook-form';

import type { FieldValues, UseControllerProps } from 'react-hook-form';

type Option = FormControlLabelProps;

export type RadioFieldOptions = Option[];

export type RadioFieldProps<TFieldValues extends FieldValues> =
  RadioGroupProps &
    UseControllerProps<TFieldValues> & {
      label: ReactNode;
      options: RadioFieldOptions;
    };

export const RadioField = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  disabled,
  label,
  options,
  ...rest
}: RadioFieldProps<TFieldValues>) => {
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

      <RadioGroup {...field} {...rest}>
        {options.map((option: Option, index: number) => (
          <FormControlLabel key={index} {...option} control={<Radio />} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
