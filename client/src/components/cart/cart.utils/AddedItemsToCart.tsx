import React from 'react';
import { CartItemRow } from '.';
import { Items } from '../..';

interface Props {
 items: Items[];
 handleAddQuantity: (id: number) => void;
 handleRemove: (id: number, product: Items, userId: number) => void;
 handleSubQuantity: (id: number) => void;
}

export const AddedItemsToCart: any = ({
 items,
 handleAddQuantity,
 handleSubQuantity,
 handleRemove
}: Props) => {
 return items?.length ? (
  items?.map((item) => {
   return (
    <React.Fragment key={item.id}>
     <CartItemRow
      item={item}
      handleAddQuantity={handleAddQuantity}
      handleSubQuantity={handleSubQuantity}
      handleRemove={handleRemove}
     />
    </React.Fragment>
   );
  })
 ) : (
  <tr
   style={{
    fontSize: '2rem',
    padding: 'auto 0 auto 1rem',
    textAlign: 'center'
   }}
  >
   <td
    style={{
     fontSize: '2rem',
     padding: 'auto 0 auto 1rem'
    }}
   >
    Nothing.
   </td>
  </tr>
 );
};
