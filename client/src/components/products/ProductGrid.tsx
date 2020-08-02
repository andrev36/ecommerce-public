import React from 'react';
import { connect } from 'react-redux';
import { ProductGridHook, ProductGridItemList, ProductGridLayout } from '..';
import { addToCart, fetchItemsRedux } from '../../actions/cart.actions';
import { Items } from '../global';

interface Props {
 addToCart: (id: number) => void;
 fetchItemsRedux: (request: any) => void;
 filteredItems?: Items[];
 id?: number;
 imageIndex?: number;
 items?: Items[];
 location?: any;
 searchItems?: Items[];
 userId: number | undefined;
 value?: any;
}

const ProductGridComponent: React.FC<Props> = ({
 fetchItemsRedux,
 userId,
 addToCart
}) => {
 // * NOTE ItemList Component with props
 const {
  items,
  handleSearchTermSubmit,
  handleInput,
  searchTerm,
  pickedCostOrder,
  handleCostOrderChange,
  pickedColor,
  handleColorChange,
  pageCount,
  handlePageClick
 } = ProductGridHook({ fetchItemsRedux });
 // * NOTE ItemList Component with props
 const ProductGridItemListComponent = (
  <ProductGridItemList items={items} userId={userId} addToCart={addToCart} />
 );
 // * NOTE ProductGridLayout Component with props
 return (
  <>
   <ProductGridLayout
    productGridItemList={ProductGridItemListComponent}
    handleSearchTermSubmit={handleSearchTermSubmit}
    handleInput={handleInput}
    searchTerm={searchTerm}
    pickedCostOrder={pickedCostOrder}
    handleCostOrderChange={handleCostOrderChange}
    pickedColor={pickedColor}
    handleColorChange={handleColorChange}
    pageCount={pageCount}
    handlePageClick={handlePageClick}
   />
  </>
 );
};

const mapStateToProps = (state: any) => {
 return {
  userId: state.session.userId
 };
};

const mapDispatchToProps = (dispatch: any) => {
 return {
  fetchItemsRedux: (request: any) => {
   dispatch(fetchItemsRedux(request));
  },
  addToCart: (id: number) => {
   dispatch(addToCart(id));
  }
 };
};

export const ProductGrid = connect(
 mapStateToProps,
 mapDispatchToProps
)(ProductGridComponent);
