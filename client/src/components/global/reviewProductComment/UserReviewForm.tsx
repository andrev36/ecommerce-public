import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import axios, { AxiosResponse } from 'axios';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { Spinner, StyledButton, StyledTextArea } from '..';
import { StyledForm, StyledTitleForm } from '../..';

// * NOTE User review form
interface FormProps {
 session?: any;
 match?: any;
 params?: any;
}

const mapStateToProps = ({ session }: FormProps) => ({
 session
});

const userReviewValidationSchema = Yup.object().shape({
 comment: Yup.string()
});

const UserReviewFormComponent: React.FC<FormProps> = ({ session, match }) => {
 // * Creating new User Review - comment with rating
 const [responseMessage, setResponseMessage] = useState<string>('');
 const [rating, setRating] = useState<number | null>(2);
 const handleSubmit = async (values: any, actions: any) => {
  try {
   const { comment } = values;
   const { userId } = session;
   const res: AxiosResponse<any> = await axios.post(
    `/api/user-review/${match.params.productID}`,
    {
     comment,
     rating,
     userId,
     productID: match.params.productID
    }
   );
   const {
    data: { success }
   }: any = res;
   if (success === true) {
    setResponseMessage('User review has been submitted');
   } else {
    setResponseMessage('Something went wrong. Please try again later.');
   }
  } catch (error) {}
 };
 return (
  <>
   <Formik
    initialValues={{
     comment: ''
    }}
    validationSchema={userReviewValidationSchema}
    onSubmit={handleSubmit}
   >
    {({
     values,
     errors,
     touched,
     handleChange,
     handleBlur,
     handleSubmit,
     isSubmitting
    }) => (
     <StyledForm onSubmit={handleSubmit}>
      <StyledTitleForm>Create new user review</StyledTitleForm>
      <Typography variant='h5'>Rate product</Typography>
      <Rating
       style={{ margin: '10px auto' }}
       name='simple-controlled'
       value={rating}
       onChange={(_: any, newValue: any) => {
        setRating(newValue);
       }}
      />
      <StyledTextArea
       style={{ margin: '10px auto' }}
       onChange={handleChange}
       onBlur={handleBlur}
       name='comment'
       label='Comment'
       value={values.comment}
       rows='8'
       multiline
      />
      {touched.comment && errors.comment && <div>{errors.comment}</div>}
      <StyledButton type='submit' disabled={isSubmitting}>
       Submit
      </StyledButton>
      {isSubmitting ? <Spinner /> : <div />}
      <div>{responseMessage}</div>
     </StyledForm>
    )}
   </Formik>
  </>
 );
};

export const UserReviewForm = withRouter(
 connect(mapStateToProps, {})(UserReviewFormComponent)
);
