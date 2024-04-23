// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import products, { Product } from "../../../products";

type Data = {
  product: Product;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    const id = req.query.id;
    const product = products.find((product) => product.id === Number(id)) as Product;
    res.status(200).json({product: product});
}
