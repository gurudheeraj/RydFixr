const mongoose = require('mongoose');

const customerRequestSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  fixpertId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fixpert',
    default: null
  },
  issue: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined', 'expired'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '30m' // Optional auto-expiry
  }
});

customerRequestSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('CustomerRequest', customerRequestSchema);
