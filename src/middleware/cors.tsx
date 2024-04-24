import Cors from 'cors';
import { NextApiResponse } from 'next';

// Initialize the Cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: 'https://thesis-csr.vercel.app/', 
});

// Helper function to handle CORS
export default function handleCors(req, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}