import { Typography } from '@material-ui/core'
import axios, { AxiosResponse } from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {
 IconsRow,
 newsletterValidationSchema,
 StyledFooterColumn,
 StyledInput,
 SubmitButtonSection,
} from '..'

interface Props extends RouteComponentProps<{}> {
 email?: string
 res?: AxiosResponse<{ data: { success: boolean } }>
}

const NewsletterFormComponent: React.FC<Props> = () => {
 const [responseMessage, setResponseMessage] = useState<string>('')
 const handleSubmit = async (
  values: { email?: string },
  actions: { setSubmitting(arg0: boolean): void },
 ) => {
  try {
   const { email } = values
   const res = await axios.post('/api/newsletter', {
    email,
   })
   const {
    data: { success },
   } = res
   if (success === true) {
    setResponseMessage(
     'Email was send. Check test Newsletter message in your mailbox.',
    )
    actions.setSubmitting(false)
   } else {
    setResponseMessage('Something went wrong. Please try again later.')
   }
  } catch (error) {
   setResponseMessage('Something went wrong. Please try again later.')
  }
 }
 return (
  <Formik
   initialValues={{
    email: '',
   }}
   validationSchema={newsletterValidationSchema}
   onSubmit={handleSubmit}
  >
   {(x) => (
    <StyledFooterColumn>
     <Typography
      variant='h5'
      style={{
       fontWeight: 'bold',
      }}
     >
      Newsletter (Test email sending)
     </Typography>
     <form
      onSubmit={x.handleSubmit}
      style={{
       border: 'black 1px',
      }}
     >
      <StyledInput
       onChange={x.handleChange}
       type='email'
       name='email'
       label='Email'
       value={x.values.email}
       onBlur={x.handleBlur}
      />
      {x.touched.email && x.errors.email && <div>{x.errors.email}</div>}
      <SubmitButtonSection
       isSubmitting={x.isSubmitting}
       responseMessage={responseMessage}
      />
     </form>
     <IconsRow dim='40px' />
    </StyledFooterColumn>
   )}
  </Formik>
 )
}

export const NewsletterForm = withRouter(NewsletterFormComponent)
