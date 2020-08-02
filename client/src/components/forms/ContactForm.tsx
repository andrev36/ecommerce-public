import axios, { AxiosResponse } from 'axios';
import { Formik } from 'formik';
import React, { useState } from 'react';
import {
 emailValidationSchema,
 StyledForm,
 StyledInput,
 StyledTextArea,
 StyledTitleForm,
 SubmitButtonSection
} from '..';
import EmailImage from '../../assets/images/email/question-2130492-0.svg';

interface Props {
 email?: string;
 messageEmail?: string;
}

const ContactFormComponent: React.FC<Props> = () => {
 const [responseMessage, setResponseMessage] = useState<string>('');
 const handleSubmit = async (values: any, actions: any) => {
  try {
   const { email, messageEmail } = values;
   const res: AxiosResponse<any> = await axios.post('/api/contact', {
    email,
    messageEmail
   });
   const {
    data: { success }
   }: any = res;
   if (success === true) {
    setResponseMessage(
     "Email was send. We'll contact you as soon as possible."
    );
   } else {
    setResponseMessage('Something went wrong. Please try again later.');
   }
  } catch (error) {
   setResponseMessage('Something went wrong. Please try again later.');
  }
 };
 return (
  <Formik
   initialValues={{
    email: '',
    messageEmail: ''
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
    isSubmitting
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
       style={{ margin: '1.25rem auto', maxHeight: '2rem' }}
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
        margin: '1rem auto'
       }}
      >
       {touched.email && errors.email && <div>{errors.email}</div>}
      </div>
      <StyledTextArea
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
        margin: '1rem auto'
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
 );
};

export const ContactForm = ContactFormComponent;
