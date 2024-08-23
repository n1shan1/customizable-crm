require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/dbConfig");
const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes"); // Import customer routes
const orderRoutes = require("./routes/orderRoutes"); // Import order routes
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only this origin to access the backend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow these HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
// Middleware
app.use(express.json());
app.use(cookieParser());

// Connect to the database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes); // Use customer routes
app.use("/api/orders", orderRoutes); // Use order routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
