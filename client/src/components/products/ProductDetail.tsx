import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import { addToCart } from '../../actions/cart.actions'
import { AppActions } from '../../actions/cart.types'
import { Items } from '../global'
import { ProductDetailLayout } from './productDetail.utils'
import { ProductDetailHook } from './productDetail.utils/ProductDetailHook'

interface Props {
 addToCart: (id: number) => void
 id?: number
 item: Items | undefined
 session?: {
  userId: string | null
  username: string | null
  isAdmin: boolean | null
 }
 loggedIn?: boolean
 match?: any
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Detailed information page for product with chosen id.
* Route depends on a product ID.
* Ability to add item to Redux Cart.
* User review form renders only if a user is logged in.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const ProductDetailComponent: any = ({ addToCart, match, loggedIn }: Props) => {
 const { staticPath, protocol, item, handleClick } = ProductDetailHook({
  addToCart,
  match,
 })
 return ProductDetailLayout({
  staticPath,
  protocol,
  item,
  handleClick,
  loggedIn,
 })
}

interface LinkStateToProps {
 session: {
  userId: string | null
  username: string | null
  isAdmin: boolean | null
 }
}

const mapStateToProps = (state: LinkStateToProps) => {
 return {
  userId: state.session.userId,
  loggedIn: Boolean(state.session.userId),
 }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => {
 return {
  addToCart: (id: number) => {
   dispatch(addToCart(id))
  },
 }
}

export const ProductDetail = withRouter(
 connect(mapStateToProps, mapDispatchToProps)(ProductDetailComponent),
)
