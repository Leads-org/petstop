# PetStop

A simple ecommerce apps about pets

![Screenshot 1]()

![Screenshot 2]()

![Screenshot 3]()

## Links

### Production Frontend/Client

- https://leads-petstop.netlify.app
- https://petstop.mzoel.com
- https://petstop.adefaisal.com
- https://petstop.makmuremha.com
- https://petstop.vektorlutfi.com

### Local Frontend/Client

- http://localhost:3000

### Production Backend/Server

- https://api.kontenbase.com/query/api/v1/bee912c9-4dfd-4be3-97cc-5b3a353e0ac6

### Design

- Figma Mockup: https://www.figma.com/file/5Fg06BGKaD9idXYMK62xYp/Petshub?node-id=0%3A1
- Figma Prototype: https://www.figma.com/proto/5Fg06BGKaD9idXYMK62xYp/Petshub?node-id=3%3A7&scaling=scale-down-width&page-id=0%3A1

## Main Features

- [x] See landing page
- [x] List all products
- [x] See product details
- [ ] Customer profile
- [ ] Shopping cart
- [ ] Orders

## Team Members

| Name                         | Role              | GitHub URL                                                     |
| ---------------------------- | ----------------- | -------------------------------------------------------------- |
| Muhammad Zulkarnaen Indranto | Lead, Frontend    | [@zul1996](https://github.com/zul1996)                         |
| Makmur                       | Frontend, Design  | [@makmuremha](https://github.com/makmuremha)                   |
| Muhammad Lutfi               | Frontend, Design  | [@vektormuhammadlutfi](https://github.com/vektormuhammadlutfi) |
| Ade Ahmad Faisal             | Frontend, Backend | [@adeahmadfaisal](https://github.com/adeahmadfaisal)           |

## Tech Stack

### Commerce

- HTML
- CSS
  - Tailwind CSS
- JavaScript
  - TypeScript
- Node.js & npm
- React
  - Next.js v12
    - next/router
    - next/link
    - next/head
    - next/image
- Backend
  - REST API: Kontenbase
- Data Fetching
  - REST API: `swr` / `axios`
- UI Components
  - Radix UI
- Misc
  - Prettier
  - ESLint

## API Specification

API URL: https://api.kontenbase.com/query/api/v1/bee912c9-4dfd-4be3-97cc-5b3a353e0ac6

### Products

| HTTP   | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/products`     | Get all products     |
| POST   | `/products`     | Create new product   |
| PATCH  | `/products/:id` | Edit product by id   |
| DELETE | `/products/:id` | Delete product by id |

```json
[
  {
    "_id": "",
    "name": "",
    "price": "",
    "description": "",
    "image": [
      {
        "fileName": "",
        "url": ""
      }
    ],
    "category": {},
    "created_at": "",
    "updated_at": ""
  }
]
```

### Products Category

| HTTP   | Endpoint                | Description                   |
| ------ | ----------------------- | ----------------------------- |
| GET    | `/product-category`     | Get all product categories    |
| POST   | `/product-category`     | Create product category       |
| PATCH  | `/product-category/:id` | Edit product category by id   |
| DELETE | `/product-category/:id` | Delete product category by id |

```json
[
  {
    "_id": "",
    "name": "",
    "description": ""
  }
]
```

### Customers

| HTTP   | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/customers`     | Get all customers |
| POST   | `/customers`     | Create customers  |
| PATCH  | `/customers/:id` | Edit customers    |
| DELETE | `/customers/:id` | Delete customers  |

```json
[
  {
    "_id": "",
    "email": "",
    "fullname": "",
    "billing_address": "",
    "default_shipping_address": "",
    "phone": ""
  }
]
```

### Orders

| HTTP   | Endpoint      | Description    |
| ------ | ------------- | -------------- |
| GET    | `/orders`     | Get all orders |
| POST   | `/orders`     | Create orders  |
| PATCH  | `/orders/:id` | Edit orders    |
| DELETE | `/orders/:id` | Delete orders  |

```json
[
  {
    "_id": "",
    "customer_id": "",
    "amount": "",
    "shipping_address": "",
    "order_date": "",
    "order_status": ""
  }
]
```

### Order details

| HTTP   | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| GET    | `/order-details`     | Get all order-details |
| POST   | `/order-details`     | Create order-details  |
| PATCH  | `/order-details/:id` | Edit order-details    |
| DELETE | `/order-details/:id` | Delete order-details  |

```json
[
  {
    "_id": "",
    "order_id": "",
    "product_id": "",
    "price": "",
    "quantity": ""
  }
]
```

## Development

Install dependencies:

```sh
npm install
```

Run server in development mode:

```sh
npm run dev / yarn run dev
```

Build for production:

```sh
npm run build
```

Start in production mode:

```sh
npm start
```
