const express = require("express");
const {
  registerUser,
  authUser,
  logoutUser,
} = require("../controllers/authController");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.post("/logout", logoutUser);

// Example protected route
router.get("/admin", protect, admin, (req, res) => {
  res.status(200).json({ message: "Admin access granted" });
});

router.get("/user", protect, (req, res) => {
  res.status(200).json({ message: "User access granted" });
});

module.exports = router;
