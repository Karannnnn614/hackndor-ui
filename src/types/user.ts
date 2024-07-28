export const Roles = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  SUPER_ADMIN: 'SUPER_ADMIN',
};

export type Role = (typeof Roles)[keyof typeof Roles];

export type User = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  role: Role;
};
