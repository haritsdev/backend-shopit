mongoose = require('mongoose'); //

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama Produk Harus di isi'],
    trim: true,
    maxLength: [100, 'Nama product tidak boleh lebih dari 100 character'],
  },
  price: {
    type: Number,
    required: [true, 'Harga Barang harus diisi'],
    trim: true,
    default: 1000,
  },
  description: {
    type: String,
    minLength: [50, 'Deskripsi Produk minimal 50 character'],
    required: [true, 'Deskripsi produk harus diisi'],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Pilih kategori produk terlebih dahulu'],
    enum: {
      values: [
        'Electronics',
        'Cameras',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
      ],
      message: 'Masukan kategori produk',
    },
  },
  seller: {
    type: String,
    required: [true, 'Masukan Penjual produk'],
  },
  stock: {
    type: Number,
    required: [true, 'masukan stok produk'],
    maxLength: [5, 'Stok produk tidak boleh lebih dari 10000'],
    defaullt: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productsSchema);
