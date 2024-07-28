import { createContext } from 'react';

import type { JSX, PropsWithChildren } from 'react';

import type { User } from '@/types/user';

export type UserContextValue = {
  user: User | null;
};

export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

export type UserProviderProps = PropsWithChildren<{
  user: User;
}>;

export function UserProvider({
  children,
  user,
}: UserProviderProps): JSX.Element {
  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const UserConsumer = UserContext.Consumer;
