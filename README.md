
# AIFUDI-API

# Overview
This code implements an Express.js server with a MongoDB database. The server uses Mongoose to connect to the database and Express to handle the HTTP requests and responses.

## Getting Started
Clone the repository to your local machine.
Run npm install in your terminal to install the dependencies.
Start the server by running npm start.
Code Structure
The code has two main files:

- router.ts: contains all the routes for the API.
- index.ts: implements the Express.js server, connects to the MongoDB database, and uses the routes from router.ts.
Router.

The router.ts file uses the Router from Express.js to handle the routes for the API. There are several routes for handling different HTTP methods (GET, POST, DELETE, PATCH) for categories and products.

## MongoDB Connection
The index.ts file uses Mongoose to connect to the MongoDB database. It sets the strictQuery option to false and connects to the database at mongodb://localhost:27017/db_aifudi. The server listens on port 3333 and outputs a message to the console once the connection to the database is established.

## Error Handling
The code includes a try-catch block to handle any errors that occur while connecting to the database. In case of an error, the error message is logged to the console.

Route Not Found Handling
The routeNotFoundHandler middleware in the index.ts file is used to handle any requests to routes that do not exist.

## Conclusion
This code provides a basic implementation of an Express.js server with a MongoDB database. It can be used as a starting point for building more complex applications.



# API route documentation
The file index.js contains all the API routes for our application. It uses the express library to handle HTTP requests.

## Endpoints
### v1/categories
- GET /v1/categories: lists all categories
- POST /v1/categories: creates a new category
- DELETE /v1/categories/:id: deletes a category by its id
- GET /v1/categories/:id: returns the category by its id

### v1/products
- GET /v1/products: lists all products
- POST /v1/products: creates a new product

### v1/orders
- GET /v1/orders: lists all orders
- POST /v1/orders: creates a new order
- PATCH /v1/orders/:id/status: updates the status of an order

## Use Cases
The following use cases are imported and utilized in the routes:

```
listCategories
createCategory
listProducts
createProduct
listOrders
createOrder
deleteCategory
updateOrder
requestCategoryById
```

## Readme
API Routes
This file contains all the API routes for our application. The routes are defined using the express library. The routes are defined for /v1/categories, /v1/products, and /v1/orders.

Use Cases
The routes utilize the following use cases:

listCategories
createCategory
listProducts
createProduct
listOrders
createOrder
deleteCategory
updateOrder
requestCategoryById

## Contact
## [Send me an email](mailto:vieira.es@gmail.com)


