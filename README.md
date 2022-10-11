# A simple ecommerce apps about pets

Project description with clear goal.

![Screenshot 1]()

![Screenshot 2]()

## Links

### Production

- https://project.vercel.app
- https://project.netlify.app
- https://project.example.com

### Local

- http://localhost:3000
- http://localhost:5173

### Design

- Figma Mockup: https://www.figma.com/file/5Fg06BGKaD9idXYMK62xYp/Petshub?node-id=0%3A1
- Figma Prototype: https://www.figma.com/file/5Fg06BGKaD9idXYMK62xYp/Petshub?node-id=0%3A1

## Main Features

- List Product
- Detail Product
- Orders
- Shopping cart
- profile customer

## Team Members

| Name                         | Role              | GitHub URL                                                     |
| ---------------------------- | ----------------- | -------------------------------------------------------------- |
| Muhammad Zulkarnaen Indranto | Lead, Frontend    | [@zul1996](https://github.com/zul1996)                         |
| Makmur                       | Design, Docs      | [@makmuremha](https://github.com/makmuremha)                   |
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
    - next/image
    - next/head
- Data Fetching
  - REST API: `axios`
- UI Components
  - Radix UI
- Misc
  - Prettier
  - ESLint

## API Specification

API URL:

### Products

| HTTP   | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | `/products`     | Get all products |
| POST   | `/products`     | Create products  |
| PATCH  | `/products/:id` | Edit products    |
| DELETE | `/products/:id` | Delete products  |

```json
[
  {
    "_id": "",
    "name": "",
    "price": "",
    "descriptions": "",
    "category_id": "",
    "image": [
      {
        "fileName": "",
        "url": ""
      }
    ]
  }
]
```

### Products Category

| HTTP   | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| GET    | `/product-category`     | Get all product category |
| POST   | `/product-category`     | Create product category  |
| PATCH  | `/product-category/:id` | Edit product category    |
| DELETE | `/product-category/:id` | Delete product category  |

```json
[
  {
    "_id": "",
    "name": "",
    "descriptions": ""
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
