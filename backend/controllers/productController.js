const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncError');
const APIFeatures = require('../utils/apiFeatures');

//* Create new product => * /api/v1/product/new
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

//* Get all products => /api/v1/products * QUERY STRING /api/v1/products?keyword=apple
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;
  const productCount = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);
  const products = await apiFeatures.query;

  setTimeout(()=>{
    res.status(200).json({
      success: true,
      message: 'Berhasil menampilkan data produk',
      count: products.length,
      productCount,
      products,
    });
  },2000)
 
});

//* Get single product details => /api/v1/product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('product tidak di temukan', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//* Update Product => /api/v1/product/:id
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('product tidak di temukan', 404));
  }

  await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
  });
});

// dDelete product /api/v1/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('product tidak di temukan', 404));
  }
  await product.remove();

  return res.status(200).json({
    succss: true,
    message: 'Product berhasil di hapus',
  });
});
