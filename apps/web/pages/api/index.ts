// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default function index(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ 
    name: 'server is up', 
    time: new Date().toISOString(), 
  });
}