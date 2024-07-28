import { zodResolver } from '@hookform/resolvers/zod';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z as zod } from 'zod';

import type { JSX } from 'react';

import { useLogin } from '@/hooks/useLogin';
import { InputField } from '@components/Fields/InputField';

const schema = zod.object({
  username: zod.string().min(1, { message: 'Email is required' }).email(),
  password: zod.string().min(1, { message: 'Password is required' }),
  rememberMe: zod.boolean().optional(),
});

type Values = zod.infer<typeof schema>;

const defaultValues = {
  username: '',
  password: '',
  rememberMe: true,
} satisfies Values;

export function LoginForm(): JSX.Element {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });

  const onSuccess = () => {
    router.push('/');
  };

  const { mutate, isPending, error } = useLogin(onSuccess);

  useEffect(() => {
    if (error) {
      setError('root', { type: 'server', message: error?.message });
      toast.error(error?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const onSubmit = async (values: Values): Promise<void> => {
    mutate(values);
  };

  return (
    <Stack gap={4}>
      <Stack gap={1} alignItems="center">
        <Typography variant="h4">Sign In</Typography>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <InputField
            control={control}
            name="username"
            error={Boolean(errors.username)}
            label="Email address"
            type="email"
            helperText={errors.username ? errors.username.message : null}
          />

          <InputField
            control={control}
            name="password"
            endAdornment={
              showPassword ? (
                <VisibilityIcon
                  cursor="pointer"
                  onClick={(): void => {
                    setShowPassword(false);
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  cursor="pointer"
                  onClick={(): void => {
                    setShowPassword(true);
                  }}
                />
              )
            }
            error={Boolean(errors.password)}
            label="Password"
            type={showPassword ? 'text' : 'password'}
            helperText={errors.password ? errors.password.message : null}
          />

          <Controller
            control={control}
            name="rememberMe"
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="Remember this Device"
              />
            )}
          />

          {errors.root ? (
            <Alert color="error">{errors.root.message}</Alert>
          ) : null}

          <Button
            disabled={isPending}
            type="submit"
            color="inherit"
            variant="contained"
            size="large"
            fullWidth
          >
            Sign in
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
