import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: 'success' | 'failure';
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'success' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
