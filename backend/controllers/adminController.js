const User = require("../models/User");
const Cart = require("../models/Cart");
const LoginLog = require("../models/LoginLog");

// ✅ Only allow admin
const isAdmin = (req, res, next) => {
  if (req.headers["x-user-email"] === "admin@gmail.com") return next();
  return res.status(403).json({ message: "Forbidden - Admins only" });
};

// ✅ Get all users
const getUsers = async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json({ users });
};

// ✅ Get all cart items
const getCarts = async (req, res) => {
  const items = await Cart.find().sort({ createdAt: -1 });
  res.json({ items });
};

// ✅ Get all login logs
const getLogs = async (req, res) => {
  const logs = await LoginLog.find().sort({ timestamp: -1 });
  res.json({ logs });
};

// ✅ Delete user
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

// ✅ Delete cart item
const deleteCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Cart item deleted" });
};

module.exports = {
  isAdmin,
  getUsers,
  getCarts,
  getLogs,
  deleteUser,
  deleteCart,
};
