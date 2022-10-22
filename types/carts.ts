export type Carts = {
    _id: string;
    storageId: string;
    totalPrice: number;
    products: [
      {
        _id:any;
        image : [
          {
            url: string
          }
        ],
        name:string;
        price: number;
      }
    ];
    quantity: number;
  };