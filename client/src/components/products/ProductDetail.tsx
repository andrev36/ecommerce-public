import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addToCart } from '../../actions/cart.actions';
import { Items } from '../global';
import { ProductDetailLayout } from './productDetail.utils';
import { ProductDetailHook } from './productDetail.utils/ProductDetailHook';

interface Props {
 addToCart: (id: number) => void;
 id?: number;
 item?: Items;
 session?: any;
 loggedIn?: boolean;
 match?: any;
}

const ProductDetailComponent: React.FC<Props> = ({
 addToCart,
 match,
 loggedIn
}) => {
 const { baseURL, item, handleClick } = ProductDetailHook({
  addToCart,
  match
 });
 return ProductDetailLayout({
  baseURL,
  item,
  handleClick,
  loggedIn
 });
};

const mapStateToProps = (state: any) => {
 return {
  userId: state.session.userId,
  loggedIn: Boolean(state.session.userId)
 };
};

const mapDispatchToProps = (dispatch: any) => {
 return {
  addToCart: (id: number) => {
   dispatch(addToCart(id));
  }
 };
};

export const ProductDetail = withRouter(
 connect(mapStateToProps, mapDispatchToProps)(ProductDetailComponent)
);
