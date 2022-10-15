export type Product = {
  _id: string;
  name: string;
  price: string;
  description: string;
  image: [
    {
      fileName: string;
      url: string;
    }
  ];
  created_at: string;
  updated_at: string;
};
