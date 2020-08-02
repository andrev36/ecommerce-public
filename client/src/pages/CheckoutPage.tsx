import React from 'react';
import {
 CardsSquare,
 CheckoutProductsTable,
 Footer,
 StyledContainerFlex,
 StyledItemFlex
} from '../components';
import { CheckoutForm } from '../components/index';

export const CheckoutPage: React.FC = () => {
 return (
  <>
   <StyledContainerFlex>
    <StyledItemFlex>
     <section>
      <CheckoutForm />
     </section>
    </StyledItemFlex>
    <StyledItemFlex>
     <section>
      <CheckoutProductsTable />
     </section>
    </StyledItemFlex>
   </StyledContainerFlex>
   <CardsSquare />
   <Footer />
  </>
 );
};
