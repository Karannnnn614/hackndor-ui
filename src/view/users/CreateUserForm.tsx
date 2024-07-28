import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import type { JSX, Ref } from 'react';

import { InputField } from '@/components/Fields/InputField';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const schema = zod.object({
  firstName: zod.string().min(1, { message: 'First name is required' }),
  lastName: zod.string().min(1, { message: 'Last name is required' }),
  email: zod.string().min(1, { message: 'Email is required' }).email(),
  password: zod
    .string()
    .min(6, { message: 'Password should be at least 6 characters' }),
  phone: zod
    .string()
    .regex(phoneRegex, { message: 'Invalid Number!' })
    .optional(),
});

export type CreateUserFormValues = zod.infer<typeof schema>;

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
} satisfies CreateUserFormValues;

export type CreateUserFormOnSubmit = (
  // eslint-disable-next-line no-unused-vars
  createUserFormValues: CreateUserFormValues,
) => void;

export type CreateUserFormRef = {
  // eslint-disable-next-line no-unused-vars
  submitForm: (onSubmit: CreateUserFormOnSubmit) => void;
};

export type CreateUserFormProps = {
  formRef: Ref<CreateUserFormRef>;
};

export function CreateUserForm({ formRef }: CreateUserFormProps): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  useImperativeHandle<CreateUserFormRef, CreateUserFormRef>(formRef, () => ({
    submitForm(onSubmit: CreateUserFormOnSubmit) {
      handleSubmit((values: CreateUserFormValues) => {
        onSubmit(values);
      })();
    },
  }));

  return (
    <Stack gap={2}>
      <InputField
        control={control}
        name="firstName"
        error={Boolean(errors.firstName)}
        label="First name"
        helperText={errors.firstName ? errors.firstName.message : null}
      />

      <InputField
        control={control}
        name="lastName"
        error={Boolean(errors.lastName)}
        label="Last name"
        helperText={errors.lastName ? errors.lastName.message : null}
      />

      <InputField
        control={control}
        name="email"
        error={Boolean(errors.email)}
        label="Email address"
        type="email"
        helperText={errors.email ? errors.email.message : null}
      />

      <InputField
        control={control}
        name="password"
        error={Boolean(errors.password)}
        label="Password"
        type="password"
        helperText={errors.password ? errors.password.message : null}
      />

      <InputField
        control={control}
        name="phone"
        error={Boolean(errors.phone)}
        label="Phone"
        helperText={errors.phone ? errors.phone.message : null}
      />

      {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
    </Stack>
  );
}
