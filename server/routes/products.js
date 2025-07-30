import { Router } from 'express';
import Product from '../models/Product.js';
import { protect } from '../utils/authMiddleware.js';

const router = Router();

// Public - get all products
router.get('/', async (req, res) => {
  const { category, search } = req.query;
  const query = {};
  if (category) query.category = category;
  if (search) query.title = { $regex: search, $options: 'i' };
  const products = await Product.find(query).sort('-createdAt');
  res.json(products);
});

// Admin only middleware
const adminOnly = [protect, (req, res, next) => {
  if (!req.user?.isAdmin) return res.status(403).json({ message: 'Admin only' });
  next();
}];

// Create product
router.post('/', adminOnly, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// Update product
router.put('/:id', adminOnly, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete product
router.delete('/:id', adminOnly, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product removed' });
});

export default router;