import { Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { IconsRow, Items, StyledButton } from '../../global';

interface Props {
 title: string;
 cost: number;
 color: string;
 size: string[];
 id: number;
 item: Items;
 userId: string;
 handleClick: (id: number, product: Items, userId: string) => void;
}

const DetailInfoSectionComponent: React.FC<Props> = ({
 title,
 cost,
 color,
 size,
 id,
 handleClick,
 item,
 userId
}) => {
 const SizesInline = size?.map((sizes: any, key: number) => (
  <span
   key={key}
   style={{
    borderRight: '1px solid black',
    display: 'inline',
    paddingRight: '.5rem',
    margin: 'auto .25rem'
   }}
  >
   {sizes}
  </span>
 ));
 return (
  <>
   <section style={{ margin: '3.75rem 0 0 5rem' }}>
    <Typography variant='h5'>Product: {title}</Typography>
    <Typography variant='h5'>Cost: {cost}$</Typography>
    <ul>
     <li>Color: {color}</li>
     <li>Size: {SizesInline}</li>
    </ul>
    <div style={{ padding: '20px 0' }}>
     <StyledButton
      type='button'
      onClick={() => {
       handleClick(id, item, userId);
      }}
     >
      Add to cart
     </StyledButton>
     <IconsRow dim='40px' />
    </div>
   </section>
  </>
 );
};

const mapStateToProps = (state: any) => ({
 userId: state.session.userId
});

export const DetailInfoSection = connect(
 mapStateToProps,
 {}
)(DetailInfoSectionComponent);
