import { Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import axios, { AxiosResponse } from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import * as Yup from 'yup'
import { Spinner, StyledButton, StyledContainerFlex, StyledTextArea } from '..'
import { StyledForm, StyledTitleForm } from '../..'

// * NOTE User review form
interface FormProps extends RouteComponentProps<{ productID: string }> {
 session?: {
  userId: string
  username: string | null
  isAdmin: boolean | null
 }
 res?: AxiosResponse<{ data: { success: boolean } }>
}

const mapStateToProps = ({ session }: FormProps) => ({
 session,
})

const userReviewValidationSchema = Yup.object().shape({
 comment: Yup.string(),
})

const UserReviewFormComponent: React.FC<FormProps> = ({ session, match }) => {
 // * Creating new User Review - comment with rating
 const [responseMessage, setResponseMessage] = useState<string>('')
 const [rating, setRating] = useState<number | null>(2)
 const handleSubmit = async (
  values: { comment?: string },
  actions: { setSubmitting(arg0: boolean): void },
 ) => {
  try {
   const { comment } = values
   const { userId }: any = session
   const res = await axios.post(`/api/user-review/${match.params.productID}`, {
    comment,
    rating,
    userId,
    productID: match.params.productID,
   })
   const {
    data: { success },
   } = res
   if (success === true) {
    setResponseMessage('User review has been submitted')
    actions.setSubmitting(false)
   } else {
    setResponseMessage('Something went wrong. Please try again later.')
   }
  } catch (error) {}
 }
 return (
  <>
   <Formik
    initialValues={{
     comment: '',
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
     isSubmitting,
    }) => (
     <StyledForm onSubmit={handleSubmit}>
      <StyledContainerFlex style={{ flexDirection: 'column' }}>
       <div>
        <StyledTitleForm>Create new user review</StyledTitleForm>
       </div>
       <div>
        <Typography variant='h5'>Rate product</Typography>
        <Rating
         style={{ margin: '10px auto' }}
         name='simple-controlled'
         value={rating}
         onChange={(_, newValue) => {
          setRating(newValue)
         }}
        />
       </div>
       <div>
        <StyledTextArea
         style={{ margin: '10px auto', minWidth: '20rem' }}
         fullWidth
         onChange={handleChange}
         onBlur={handleBlur}
         name='comment'
         label='Comment'
         value={values.comment}
         rows='8'
         multiline
        />
        {touched.comment && errors.comment && <div>{errors.comment}</div>}
       </div>
       <div>
        <StyledButton type='submit' disabled={isSubmitting}>
         Submit
        </StyledButton>
        {isSubmitting ? <Spinner /> : <div />}
       </div>
       <div>{responseMessage}</div>
      </StyledContainerFlex>
     </StyledForm>
    )}
   </Formik>
  </>
 )
}

export const UserReviewForm = withRouter(
 connect(mapStateToProps, {})(UserReviewFormComponent),
)
