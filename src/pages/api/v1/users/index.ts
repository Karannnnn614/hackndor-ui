import { getCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { User } from '@/types';

import users from './users.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | User[]
    | null
    | {
        error: string;
      }
  >,
) {
  if (req.method === 'GET') {
    const token = getCookie('accessToken', { req, res });

    if (token === 'accessToken') {
      res.status(200).json(users);
    } else {
      res.status(403).json(null);
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
