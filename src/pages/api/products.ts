// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import handleCors from "../../middleware/cors";

import products, { Product } from "../../products";

type Data = {
  products: Product[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  await handleCors(req, res);
  res.status(200).json({products: products});
}
