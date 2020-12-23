import axios, { AxiosResponse } from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import {
 emailValidationSchema,
 StyledForm,
 StyledInput,
 StyledTextArea,
 StyledTitleForm,
 SubmitButtonSection,
} from '..'
import EmailImage from '../../assets/images/email/question-2130492-0.svg'

interface Props {
 email?: string
 messageEmail?: string
 res?: AxiosResponse<{ data: { success: boolean } }>
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Form submit sends a text message to provided email address.
* Uses REST API endpoint to send a request and get a response.
* Sets response message in a form according to received
* response from server.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const ContactFormComponent: React.FC<Props> = () => {
 const [responseMessage, setResponseMessage] = useState<string>('')
 const handleSubmit = async (
  values: { email: string; messageEmail: string },
  actions: { setSubmitting(arg0: boolean): void },
 ) => {
  try {
   const { email, messageEmail } = values
   const res = await axios.post('/api/contact', {
    email,
    messageEmail,
   })
   const {
    data: { success },
   } = res
   if (success === true) {
    setResponseMessage("Email was send. We'll contact you as soon as possible.")
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
    messageEmail: '',
   }}
   validationSchema={emailValidationSchema}
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
     <div>
      <img
       src={EmailImage}
       alt='login'
       style={{ width: '20rem', height: '20rem' }}
      />
     </div>
     <div>
      <StyledTitleForm>Contact form</StyledTitleForm>
      <StyledInput
       style={{ margin: '1.25rem auto', maxHeight: '2rem', minWidth: '20rem' }}
       fullWidth
       onChange={handleChange}
       type='email'
       name='email'
       label='Email'
       value={values.email}
       onBlur={handleBlur}
       variant='outlined'
      />
      <div
       style={{
        margin: '1rem auto',
       }}
      >
       {touched.email && errors.email && <div>{errors.email}</div>}
      </div>
      <StyledTextArea
       style={{ margin: '1.25rem auto', minWidth: '25rem' }}
       fullWidth
       onChange={handleChange}
       onBlur={handleBlur}
       name='messageEmail'
       label='Message'
       value={values.messageEmail}
       rows={8}
       multiline
      />
      <div
       style={{
        margin: '1rem auto',
       }}
      >
       {touched.messageEmail && errors.messageEmail && (
        <div>{errors.messageEmail}</div>
       )}
      </div>
      <SubmitButtonSection
       isSubmitting={isSubmitting}
       responseMessage={responseMessage}
      />
     </div>
    </StyledForm>
   )}
  </Formik>
 )
}

export const ContactForm = ContactFormComponent
