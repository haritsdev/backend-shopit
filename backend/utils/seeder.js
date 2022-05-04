const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/product.json');
const { connect } = require('mongoose');

//setting dotenv file path
dotenv.config({ path: 'backend/config/config.env' });
connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log('Semua Produk berhasil di hapus');
    await Product.insertMany(products);
    console.log('Semua produk berhasil di tambahkan');
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
