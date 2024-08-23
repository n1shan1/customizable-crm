const Customer = require("../models/customerModel");

// Create a new customer
const createCustomer = async (req, res) => {
  const { name, email, phone, address } = req.body;

  try {
    const newCustomer = new Customer({ name, email, phone, address });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get a customer by ID
const getCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update a customer by ID
const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { name, email, phone, address, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a customer by ID
const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
