import React, { Fragment, useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import MetaData from './layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import Product from './layout/product/Product';
import Loader from './layout/Loader';
import { useAlert } from 'react-alert';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);

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
    dispatch(getProducts(keyword, currentPage, price));
  }, [dispatch, alert, error, keyword, currentPage, price]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function changePrice(price) {
    setTimeout(setPrice(price), 2000);
  }

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
              {keyword ? (
                <Fragment>
                  <div className="col-6 col-md-3 mt-5 mb-5">
                    <div className="px-5">
                      <Range
                        marks={{
                          1: `$1`,
                          1000: `$1000`,
                        }}
                        min={1}
                        max={1000}
                        defaultValue={[1, 1000]}
                        tipFormatter={(value) => `$${value}`}
                        tipProps={{
                          placement: 'top',
                          visible: true,
                        }}
                        value={price}
                        onChange={(price) => changePrice(price)}
                        // onAfterChange={(price) => setPrice(price)}
                      />
                    </div>
                  </div>

                  <div className="col-6 col-md-9">
                    <div className="row">
                      {products &&
                        products.map((product) => (
                          <Product
                            key={product._id}
                            product={product}
                            col={4}
                          />
                        ))}
                    </div>
                  </div>
                </Fragment>
              ) : (
                products &&
                products.map((product) => (
                  <Product key={product._id} product={product} col={3} />
                ))
              )}
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
