import React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { ProductGridHook, ProductGridItemList, ProductGridLayout } from '..'
import { addToCart, fetchItemsRedux } from '../../actions/cart.actions'
import { AppActions } from '../../actions/cart.types'
import { Items } from '../global'

interface Props {
 addToCart: (id: number) => void
 fetchItemsRedux: (request: Items[]) => void
 filteredItems?: Items[]
 id?: number
 imageIndex?: number
 items?: Items[]
 searchItems?: Items[]
 userId: string | undefined
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Grid with products data, fetched from a database.
* Products can be filtered using a search field, by price or
* by color.
* Each item in a grid can be added to cart or viewed
* for detailed information on a detail page.
* Grid items are also filtered with use of a pagination.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const ProductGridComponent: React.FC<Props> = ({
 fetchItemsRedux,
 userId,
 addToCart,
}) => {
 const {
  items,
  handleInput,
  searchTerm,
  pickedCostOrder,
  handleCostOrderChange,
  pickedColor,
  handleColorChange,
  pageCount,
  handlePageClick,
 } = ProductGridHook({ fetchItemsRedux })
 const ProductGridItemListComponent = (
  <ProductGridItemList items={items} userId={userId} addToCart={addToCart} />
 )
 return (
  <>
   <ProductGridLayout
    productGridItemList={ProductGridItemListComponent}
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
 )
}

interface LinkStateToProps {
 session: {
  userId: string
 }
}

const mapStateToProps = (state: LinkStateToProps) => {
 return {
  userId: state.session.userId,
 }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => {
 return {
  fetchItemsRedux: (request: Items[]) => {
   dispatch(fetchItemsRedux(request))
  },
  addToCart: (id: number) => {
   dispatch(addToCart(id))
  },
 }
}

export const ProductGrid = connect(
 mapStateToProps,
 mapDispatchToProps,
)(ProductGridComponent)
