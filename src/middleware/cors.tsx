import Cors from 'cors';
import { NextApiResponse } from 'next';

// Initialize the Cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: 'https://thesis-74w3zz13v-matejbastas-projects.vercel.app', 
});

// Helper function to handle CORS
export default function handleCors(req: any, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}