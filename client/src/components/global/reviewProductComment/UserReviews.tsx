import Avatar from '@material-ui/core/Avatar'
import Rating from '@material-ui/lab/Rating'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { StyledContainerFlex, StyledItemFlex } from '../containers.styles'
import { UserReview } from '../InterfacesTS/userReview.interface'
import { StyledUserReviewsCard } from './userReview.styles'

interface Props
 extends RouteComponentProps<{
  productID?: string
 }> {
 res?: AxiosResponse<{
  data?: {
   userReviews?: UserReview
  }
 }>
}

// * NOTE User reviews - comments, ratings
const UserReviewsComponent: React.FC<Props> = (props) => {
 // * Fetching User Reviews - comments and ratings
 const { match } = props
 const [userReviews, setUserReviews] = useState<UserReview | undefined>()
 const fetchUserReviews = async () => {
  const res = await axios.get(`/api/user-review/${match?.params?.productID}`)
  setUserReviews(res.data.userReviews)
 }
 useEffect(() => {
  try {
   fetchUserReviews()
  } catch (error) {}
  // eslint-disable-next-line
 }, [])

 const UserReviewsList = userReviews?.map((review: UserReview | undefined) => {
  return (
   <StyledContainerFlex
    key={review?._id}
    style={{
     display: 'block',
     margin: '2rem',
     borderBottom: '1px solid black',
    }}
   >
    <StyledItemFlex style={{ margin: '0.4rem' }}>
     <Avatar />
    </StyledItemFlex>
    <StyledItemFlex style={{ margin: '0.4rem' }}>
     {review?.comment}
    </StyledItemFlex>
    <StyledItemFlex style={{ margin: '0.4rem' }}>
     <Rating
      name='read-only'
      value={review?.rating ? JSON.parse(review?.rating) : undefined}
      readOnly
     />
    </StyledItemFlex>
   </StyledContainerFlex>
  )
 })
 return (
  <>
   {userReviews ? (
    <StyledUserReviewsCard>{UserReviewsList}</StyledUserReviewsCard>
   ) : null}
  </>
 )
}

export const UserReviews = withRouter(UserReviewsComponent)
