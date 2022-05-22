import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
} from './reducers/userReducer';

import {
  productsReducer,
  productDetailReducer,
} from './reducers/productReducers';

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailReducer,
  auth: authReducer,
  user: userReducer,
  forgotPasswordReducer: forgotPasswordReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
