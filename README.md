# Nodejs Mongodb Crud

# Environment vars

This project uses the following environment variables:

| Name | Description                | Default Value                |
| ---- | -------------------------- | ---------------------------- |
| CORS | Cors accepted values       | "\*"                         |
| Db   | Database connecting string | "mongodb://localhost:27017/" |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 14.18.0

# Getting started

- Clone the repository

```
git clone  https://github.com/Muaazbinsaeed/CRUD-Node-Express-Mongo.git
```

- Install dependencies

```
cd <project_name>
npm install
```

- Build and run the project

```
npm start
```

Navigate to `http://localhost:5000`

- API Document endpoints

  swagger Spec Endpoint : http://localhost:5000/api-docs

### Project layout

```
|- test/                                // contains all the unit tests
|- app/
|   |
|   |- controller/                      // Folder containing REST Controllers (ProductController)
|   |- config/                          // Folder containing the database client
|   |- initialMongoServer/              // database connection is establised  here
|   |- routes/                          // Routes (Product Routes)
|   |- product.route.js                 // All Product Routes
|   |- models/                          // Database Models (Product Models)
|   |- product.model.js                 //  Product Model



---

### Endpoints

#### HTML

| HTTP Method | URL                    | Description |
| ----------- | ---------------------- | ----------- |
| `GET`       | http://localhost:5000/ | Root page   |

#### Product Service

| HTTP Method | URL                                                      | Description          |
| ----------- | -------------------------------------------------------- | -------------------- |
| `POST`      | http://localhost:8000/products/createProduct             | Create new Product   |
| `PUT`       | http://localhost:8000/products/updateProduct/{productId} | Update Product by ID |
| `GET`       | http://localhost:8000/products/fetchProduct/{productId}  | Get Product by ID    |
| `GET`       | http://localhost:8000/products/fetchAllProducts          | Get All Products     |
| `DELETE`    | http://localhost:8000/products/deleteProduct/{productId} | Delete Product by ID |
```
