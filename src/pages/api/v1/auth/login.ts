import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  accessToken?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    try {
      const cred = JSON.parse(JSON.stringify(req.body)) as {
        username: string;
        password: string;
      };

      if (cred.username === 'john@gmail.com' && cred.password === 'secret') {
        res.status(200).json({ accessToken: 'accessToken' });
      } else {
        res.status(403).json({ error: 'failure' });
      }
    } catch (error) {
      res.status(400).json({ error: 'Invalid request body' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
