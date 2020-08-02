import ButtonGroup from '@material-ui/core/ButtonGroup';
import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
 StyledButton,
 StyledContainerFlex,
 StyledContainerImage,
 StyledCounterButton,
 StyledIconMinus,
 StyledIconPlus,
 StyledImage,
 StyledItemFlex,
 StyledTableCell,
 StyledTableRow
} from '../..';
import { getStaticPath } from '../../../util/getStaticPath.utils';
import { Items, StyledCounterContainer } from '../../global';

interface CartItemRowProps {
 item: Items;
 userId: number;
 handleAddQuantity: (id: number) => void;
 handleSubQuantity: (id: number) => void;
 handleRemove: (id: number, product: Items, userId: number) => void;
}

const CartItemRowComponent: React.FC<CartItemRowProps> = ({
 item,
 handleAddQuantity,
 handleSubQuantity,
 handleRemove,
 userId
}) => {
 const baseURL = getStaticPath();
 return (
  <React.Fragment>
   <StyledTableRow>
    <StyledTableCell>
     <StyledContainerFlex>
      <StyledContainerImage style={{}}>
       <StyledImage
        src={`${`http://${baseURL}/static/products/product${
         item.id + 1
        }/1.jpg`}`}
        alt='item'
        style={{
         borderRadius: '3px',
         width: '100%',
         maxWidth: '9.375rem',
         height: '6.25rem'
        }}
       />
      </StyledContainerImage>
      <StyledItemFlex style={{ margin: '1rem' }}>
       <header>
        <NavLink to={`/products/${item.id}`}>{item.title}</NavLink>
       </header>
      </StyledItemFlex>
     </StyledContainerFlex>
    </StyledTableCell>
    <StyledTableCell>
     <p> {item.cost}$</p>
    </StyledTableCell>
    <StyledTableCell>
     <StyledCounterContainer>
      <ButtonGroup
       color='primary'
       aria-label='vertical outlined primary button group'
      >
       <Link to='/cart'>
        <StyledButton
         onClick={() => {
          handleSubQuantity(item.id);
         }}
         style={{
          minWidth: '3rem'
         }}
        >
         <StyledIconMinus />
        </StyledButton>
       </Link>
       <StyledCounterButton disabled>{item.quantity}</StyledCounterButton>
       <Link to='/cart'>
        <StyledButton
         onClick={() => {
          handleAddQuantity(item.id);
         }}
         style={{
          minWidth: '3rem'
         }}
        >
         <StyledIconPlus />
        </StyledButton>
       </Link>
      </ButtonGroup>
     </StyledCounterContainer>
     <div style={{ margin: '1rem .4rem', display: 'inline-block' }}>
      <NavLink to='/cart' style={{ textDecoration: 'none' }}>
       <StyledButton
        onClick={() => {
         handleRemove(item.id, item, userId);
        }}
       >
        Remove
       </StyledButton>
      </NavLink>
     </div>
    </StyledTableCell>
   </StyledTableRow>
  </React.Fragment>
 );
};

const mapStateToProps = (state: any) => {
 return {
  userId: state.session.userId
 };
};

export const CartItemRow = connect(mapStateToProps, {})(CartItemRowComponent);
