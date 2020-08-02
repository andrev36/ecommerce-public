import { Typography } from '@material-ui/core';
import React from 'react';
import { DetailInfoSection } from '..';
import {
 ImageSlider,
 Items,
 StyledContainerFlex,
 StyledItemFlex,
 StyledProductDetailInfoCard,
 StyledUserReviewsTitleText
} from '../..';
import { UserReviewForm } from '../../global/reviewProductComment/UserReviewForm';
import { UserReviews } from '../../global/reviewProductComment/UserReviews';

interface Props {
 loggedIn?: boolean;
 session?: any;
 item: Items;
 handleClick: (id: number, product: Items, userId: string) => void;
 baseURL: string;
 userId?: number;
}

const ProductDetailLayoutComponent = ({
 item,
 handleClick,
 baseURL,
 loggedIn
}: Props) => {
 return (
  <div style={{ margin: '1.5rem' }}>
   <div style={{ margin: '2.5rem auto 0', padding: '4rem 0 0 0' }}>
    <StyledContainerFlex
     style={{
      margin: '0 auto',
      justifyContent: 'space-evenly'
     }}
    >
     <StyledItemFlex style={{ zIndex: 1, margin: '2rem', maxWidth: '90vw' }}>
      <ImageSlider
       image1={`http://${baseURL}/static/products/product${item.id + 1}/1.jpg`}
       image2={`http://${baseURL}/static/products/product${item.id + 1}/2.jpg`}
      />
     </StyledItemFlex>
     <StyledProductDetailInfoCard>
      <DetailInfoSection
       title={item.title}
       cost={item.cost}
       color={item.color}
       size={item.size}
       id={item.id}
       item={item}
       handleClick={handleClick}
      />
     </StyledProductDetailInfoCard>
    </StyledContainerFlex>
   </div>
   {loggedIn ? (
    <section>
     <UserReviewForm />
    </section>
   ) : null}
   <section>
    <StyledUserReviewsTitleText>
     <Typography variant='h3'>User Reviews</Typography>
    </StyledUserReviewsTitleText>
    <UserReviews />
   </section>
  </div>
 );
};

export const ProductDetailLayout = ProductDetailLayoutComponent;
