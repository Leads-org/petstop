// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Product } from "../../types/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  
  const response = await fetch(
    `${process.env.BACKEND_URL}/carts?$lookup=*`
  );
  const products = await response.json();

  res.status(200).json(products);
}
