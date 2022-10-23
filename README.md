# PetStop

A simple ecommerce apps about pets

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

- Figma : https://www.figma.com/file/5Fg06BGKaD9idXYMK62xYp/Petshub?node-id=0%3A1

## Main Features

- [x] See landing page
- [x] List all products
- [x] See product details
- [x] Shopping cart
- [x] Search product
- [x] Filter kategori


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
- Misc
  - Prettier


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

### Carts

| HTTP   | Endpoint     | Description                   |
| ------ | -------------| ----------------------------- |
| GET    | `/carts`     | Get all data cart             |
| POST   | `/carts`     | Add Item cart product         |
| PATCH  | `/carts/:id` | Edit cart by id               |
| DELETE | `/carts/:id` | Delete cart             by id |

```json
[
  {
    "_id": "",
    "storageId": "",
    "products": [],
    "quantity": ""
  }
]
```

```

## Development

Install dependencies:

```sh
npm install
```

Run server in development mode:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Start in production mode:

```sh
npm start
```
