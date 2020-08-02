import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { StyledButton, StyledCheckbox } from '../global';

interface Props {
 total: number;
 addShipping: () => void;
 subShipping: () => void;
}

const CheckoutSubmitCardComponent: React.FC<Props> = (props) => {
 const handleChecked = (e: any) => {
  if (e.target.checked) {
   props.addShipping();
  } else {
   props.subShipping();
  }
 };
 return (
  <>
   <div
    style={{
     position: 'relative',
     margin: '1rem auto auto 1.4rem',
     fontSize: '1.3rem'
    }}
   >
    <header>
     <label>
      <span>Shipping(+6$)</span>
      <StyledCheckbox
       onClick={handleChecked}
       style={{
        margin: 'auto 1.5rem'
       }}
      />
     </label>
     <p>Total: {props.total} $</p>
    </header>
    <NavLink to='/checkout' style={{ textDecoration: 'none' }}>
     <StyledButton style={{ margin: '0 auto 2em' }}>Checkout</StyledButton>
    </NavLink>
   </div>
  </>
 );
};

const mapStateToProps = (state: any) => {
 return {
  items: state.cartReducer.addedItems,
  total: state.cartReducer.total
 };
};

const mapDispatchToProps = (dispatch: any) => {
 return {
  addShipping: () => {
   dispatch({ type: 'ADD_SHIPPING' });
  },
  subShipping: () => {
   dispatch({ type: 'SUB_SHIPPING' });
  }
 };
};

export const CheckoutSubmitCard = connect(
 mapStateToProps,
 mapDispatchToProps
)(CheckoutSubmitCardComponent);
