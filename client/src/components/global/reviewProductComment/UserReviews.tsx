import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { StyledContainerFlex, StyledItemFlex } from '../containers.styles';
import { StyledUserReviewsCard } from './userReview.styles';

interface UserReviewsProps {
 match?: any;
 params?: any;
}

// * NOTE User reviews - comments, ratings
const UserReviewsComponent: React.FC<UserReviewsProps> = (props) => {
 // * Fetching User Reviews - comments and ratings
 const { match } = props;
 const [userReviews, setUserReviews] = useState<any>([]);
 const fetchUserReviews = async () => {
  const res: AxiosResponse<any> = await axios.get(
   `/api/user-review/${match.params.productID}`
  );
  setUserReviews(res.data.userReviews);
 };
 useEffect(() => {
  try {
   fetchUserReviews();
  } catch (error) {}
  // eslint-disable-next-line
 }, []);

 const UserReviewsList = userReviews?.map((review: any) => {
  return (
   <StyledContainerFlex
    key={review._id}
    style={{ display: 'block', margin: '2rem' }}
   >
    <StyledItemFlex style={{ margin: '0.4rem' }}>
     <Avatar />
    </StyledItemFlex>
    <StyledItemFlex style={{ margin: '0.4rem' }}>
     {review.comment}
    </StyledItemFlex>
    <StyledItemFlex style={{ margin: '0.4rem' }}>
     <Rating name='read-only' value={JSON.parse(review.rating)} readOnly />
    </StyledItemFlex>
   </StyledContainerFlex>
  );
 });
 return (
  <>
   {userReviews ? (
    <StyledUserReviewsCard>{UserReviewsList}</StyledUserReviewsCard>
   ) : null}
  </>
 );
};

export const UserReviews = withRouter(UserReviewsComponent);
