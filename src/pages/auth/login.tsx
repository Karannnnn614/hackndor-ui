import type { JSX } from 'react';

import { AuthLayout } from '@/components/AuthLayout';
import { LoginForm } from '@/view/login/LoginForm';

export default function LoginPage(): JSX.Element {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

LoginPage.isPublic = true;
