const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { protect, admin } = require("../middleware/authMiddleware");

router.post("/", protect, createOrder);
router.get("/", protect, getAllOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id", protect, updateOrder);
router.delete("/:id", protect, deleteOrder);

module.exports = router;
