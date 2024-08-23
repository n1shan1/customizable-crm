# CRM Backend API

## Overview

This project is a backend API for a Customer Relationship Management (CRM) system. It is designed to handle authentication, customer management, and order processing. The API is structured to support various CRUD operations for customers, orders, and user authentication.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- A running MongoDB instance for database management.
- Postman for testing the API endpoints.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd crm-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```bash
   PORT=3000
   MONGO_URI=<your_mongo_db_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### Authentication

- **Login**

  - **URL:** `/api/auth/login`
  - **Method:** POST
  - **Body:**
    ```json
    {
      "email": "root2",
      "password": "pass2"
    }
    ```

- **Logout**

  - **URL:** `/api/auth/logout`
  - **Method:** POST
  - **Body:**
    ```json
    {
      "email": "root2",
      "password": "pass2"
    }
    ```

- **Register**

  - **URL:** `/api/auth/register`
  - **Method:** POST
  - **Body:**
    ```json
    {
      "name": "root2",
      "email": "root2",
      "password": "pass2",
      "role": "admin"
    }
    ```

### Customers

- **Get All Customers**

  - **URL:** `/api/customers`
  - **Method:** GET

- **Get One Customer**

  - **URL:** `/api/customers/{customer_id}`
  - **Method:** GET

- **Create Customer**

  - **URL:** `/api/customers`
  - **Method:** POST
  - **Body:**
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "address": "123 Main St, Anytown, USA"
    }
    ```

- **Update Customer**

  - **URL:** `/api/customers/{customer_id}`
  - **Method:** PATCH
  - **Body:**
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "address": "123 Main St, Anytown, USA"
    }
    ```

- **Delete Customer**

  - **URL:** `/api/customers/{customer_id}`
  - **Method:** DELETE

### Orders

- **Get All Orders**

  - **URL:** `/api/orders`
  - **Method:** GET

- **Get One Order**

  - **URL:** `/api/orders/{order_id}`
  - **Method:** GET

- **Create Order**

  - **URL:** `/api/orders`
  - **Method:** POST
  - **Body:**
    ```json
    {
      "customerId": "66a5204421b6b19146286656",
      "orderDate": "2024-07-27T12:34:56.789Z",
      "items": [
        {
          "product": "Laptop",
          "quantity": 1,
          "price": 1000
        },
        {
          "product": "Mouse",
          "quantity": 2,
          "price": 25
        }
      ],
      "status": "Pending"
    }
    ```

- **Update Order**

  - **URL:** `/api/orders/{order_id}`
 
