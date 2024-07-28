import { getCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { User } from '@/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | null>,
) {
  const token = getCookie('accessToken', { req, res });

  if (token === 'accessToken') {
    res.status(200).json({
      email: 'john@gmail.com',
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      phone: '+91-9999000034',
      createdAt: '2019-04-26 18:03:50.941332',
      updatedAt: '2019-04-26 18:03:50.941332',
      role: 'ADMIN',
    });
  } else {
    res.status(403).json(null);
  }
}
