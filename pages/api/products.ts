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
    query: { limit, category },
  } = req;

  /**
   * Get count
   */
  const responseCount = await fetch(
    `${process.env.BACKEND_URL}/products/count`
  );
  const productsCount = await responseCount.json();

  /**
   * Get all products
   */
  if (category) {
    const response = await fetch(
      `${process.env.BACKEND_URL}/products?$lookup=*&category[$contains]=${category}&$limit=${limit}`
    );
    const products = await response.json();
    res.status(200).json({
      products,
      count: productsCount,
    });
  } else {
    const response = await fetch(
      `${process.env.BACKEND_URL}/products?$limit=${limit}`
    );
    const products = await response.json();
    res.status(200).json({
      products,
      count: productsCount,
    });
  }
}
