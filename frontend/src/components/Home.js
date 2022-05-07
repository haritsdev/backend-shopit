import React, { Fragment, useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import MetaData from './layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import Product from './layout/product/Product';
import Loader from './layout/Loader';
import { useAlert } from 'react-alert';

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, products, error, resPerPage, productCount } = useSelector(
    (state) => state.products
  );
  const keyword = match.params.keyword;
  useEffect(() => {
    if (error) {
      return alert.error('ERROR');
    }
    dispatch(getProducts(keyword, currentPage));
  }, [dispatch, alert, error, keyword, currentPage]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  console.log(resPerPage);

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
          {resPerPage <= productCount && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText={'Next'}
                prevPageText={'Prev'}
                firstPageText={'First'}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
