import React, { Fragment, useEffect } from 'react';
import MetaData from './layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import Product from './layout/product/Product';
import Loader from './layout/Loader';
import { useAlert } from 'react-alert';
const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, products, error, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error('KONTOL');
    }
    dispatch(getProducts());
  }, [dispatch, alert, error]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`Beli produk online terbaik`} />
          <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              ;
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
