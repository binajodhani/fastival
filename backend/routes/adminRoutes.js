const express = require("express");
const router = express.Router();
const {
  isAdmin,
  getUsers,
  getCarts,
  getLogs,
  deleteUser,
  deleteCart,
} = require("../controllers/adminController");

// ✅ Admin Routes
router.get("/users", isAdmin, getUsers);
router.get("/carts", isAdmin, getCarts);
router.get("/logs", isAdmin, getLogs);

router.delete("/user/:id", isAdmin, deleteUser);
router.delete("/cart/:id", isAdmin, deleteCart);

module.exports = router;
