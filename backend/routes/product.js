const express = require('express'); //
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);
router
  .route('/product/new')
  .post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);
router
  .route('/product/:id')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct);
router
  .route('/product/:id')
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);
module.exports = router;
