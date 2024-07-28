import type { PickerValidDate } from '@mui/x-date-pickers';
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

export type DatePickerFieldProps<
  TFieldValues extends FieldValues,
  TDate extends PickerValidDate,
> = DatePickerProps<TDate> & UseControllerProps<TFieldValues>;

export const DatePickerField = <
  TFieldValues extends FieldValues,
  TDate extends PickerValidDate,
>({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  disabled,
  ...rest
}: DatePickerFieldProps<TFieldValues, TDate>) => {
  const { field } = useController<TFieldValues>({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
  });

  return <DatePicker {...field} {...rest} />;
};
