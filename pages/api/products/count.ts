import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = {
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const response = await fetch(`${process.env.BACKEND_URL}/products/count`);
  const data = await response.json();

  res.status(200).json(data);
}
