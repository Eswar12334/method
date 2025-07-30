import { Router } from 'express';
import Razorpay from 'razorpay';
import Order from '../models/Order.js';
import { protect } from '../utils/authMiddleware.js';

const router = Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order and get Razorpay orderId
router.post('/', protect, async (req, res) => {
  const { items, amount } = req.body; // amount in paise
  try {
    const options = { amount, currency: 'INR' };
    const rpOrder = await razorpay.orders.create(options);

    const order = await Order.create({
      user: req.user._id,
      products: items.map(({ productId, quantity }) => ({ product: productId, quantity })),
      amount: amount / 100,
      paymentId: rpOrder.id,
      status: 'pending',
    });

    res.json({ orderId: rpOrder.id, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Payment initiation failed' });
  }
});

// Get user orders
router.get('/my', protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('products.product');
  res.json(orders);
});

// Admin: all orders
router.get('/', protect, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: 'Admin only' });
  const orders = await Order.find().populate('user');
  res.json(orders);
});

export default router;