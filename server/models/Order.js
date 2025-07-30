import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
  amount: { type: Number, required: true },
  paymentId: { type: String },
  status: { type: String, default: 'pending', enum: ['pending', 'paid', 'shipped', 'delivered'] },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);