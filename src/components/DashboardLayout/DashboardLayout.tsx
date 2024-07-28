import Box from '@mui/material/Box';
import { PropsWithChildren, useState } from 'react';

import { Header } from './Header';
import { Main } from './Main';
import { Nav } from './Nav';

export function DashboardLayout({ children }: PropsWithChildren) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
    </>
  );
}
