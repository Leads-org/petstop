import type { NextApiRequest, NextApiResponse } from "next";

import { Product } from "../../types/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  const {
    query: { limit, category },
  } = req;

  if (category) {
    const response = await fetch(
      `${process.env.BACKEND_URL}/products?$lookup=*&category[$contains]=${category}&$limit=${limit}`
    );
    const products = await response.json();
    res.status(200).json(products);
  }

  const response = await fetch(
    `${process.env.BACKEND_URL}/products?$limit=${limit}`
  );
  const products = await response.json();

  res.status(200).json(products);
}
