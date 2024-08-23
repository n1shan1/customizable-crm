# CRM Backend API

This repository contains the backend API for a Customer Relationship Management (CRM) system. The API provides endpoints for managing authentication, customers, and orders.

## Table of Contents
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
  - [Authentication](#authentication)
  - [Customers](#customers)
  - [Orders](#orders)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the CRM backend API, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/crm-backend.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**  
   Create a `.env` file in the root directory and configure the necessary environment variables (see [Environment Variables](#environment-variables)).

4. **Run the development server:**
   ```bash
   npm start
   ```

## API Documentation

### Authentication

The authentication endpoints allow users to register, log in, and log out of the system.

- **Login**: `POST /api/auth/login`
  - Request body: `{ "email": "string", "password": "string" }`
  - Response: User details and authentication token.

- **Register**: `POST /api/auth/register`
  - Request body: `{ "name": "string", "email": "string", "password": "string", "role": "string" }`
  - Response: Newly registered user details.

- **Logout**: `POST /api/auth/logout`
  - Request body: `{ "email": "string", "password": "string" }`
  - Response: Logout confirmation.

### Customers

Endpoints to manage customers' information.

- **Get All Customers**: `GET /api/customers`
  - Response: List of all customers.

- **Get One Customer**: `GET /api/customers/{customerId}`
  - Response: Details of a specific customer.

- **Create Customer**: `POST /api/customers`
  - Request body: Customer details in JSON format.
  - Response: Created customer details.

- **Update Customer**: `PATCH /api/customers/{customerId}`
  - Request body: Updated customer details in JSON format.
  - Response: Updated customer details.

- **Delete Customer**: `DELETE /api/customers/{customerId}`
  - Response: Deletion confirmation.

### Orders

Endpoints to manage customer orders.

- **Get All Orders**: `GET /api/orders`
  - Response: List of all orders.

- **Get One Order**: `GET /api/orders/{orderId}`
  - Response: Details of a specific order.

- **Create Order**: `POST /api/orders`
  - Request body: Order details in JSON format.
  - Response: Created order details.

- **Update Order**: `PATCH /api/orders/{orderId}`
  - Request body: Updated order details in JSON format.
  - Response: Updated order details.

- **Delete Order**: `DELETE /api/orders/{orderId}`
  - Response: Deletion confirmation.

## Environment Variables

Ensure you have the following environment variables set up in your `.env` file:

- `DATABASE_URL` - URL for your database connection.
- `JWT_SECRET` - Secret key for JWT authentication.
- `PORT` - The port on which the server runs (default: 3000).

## Running the Project

To run the project locally:

1. Make sure all dependencies are installed by running `npm install`.
2. Start the development server with `npm start`.
3. The API will be accessible at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides a clear and concise overview of the project and how to get started with it. Adjustments can be made depending on additional specifics of the project.
