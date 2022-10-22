// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Product } from "../../types/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    products: Product[];
    count: number;
  }>
) {
  const {
    query: { limit },
  } = req;

  const response = await fetch(
    `${process.env.BACKEND_URL}/products?$limit=${limit}`
  );
  const products = await response.json();

  const responseCount = await fetch(
    `${process.env.BACKEND_URL}/products/count`
  );
  const productsCount = await responseCount.json();

  res.status(200).json({
    products,
    count: productsCount,
  });
}
