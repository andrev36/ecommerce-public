import { Typography } from '@material-ui/core';
import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
 IconsRow,
 newsletterValidationSchema,
 StyledButton,
 StyledFooterColumn,
 StyledInput
} from '..';

interface Props extends RouteComponentProps<{}> {
 handleSubmit?: (values: string, actions: any) => void;
 email?: string;
}

const NewsletterFormComponent: React.FC<Props> = () => {
 const handleSubmit = (values: any, actions: any) => {
  const { email }: any = values;
  axios
   .post('/api/newsletter', {
    email
   })
   .catch((err) => {});
 };
 return (
  <Formik
   initialValues={{
    email: ''
   }}
   validationSchema={newsletterValidationSchema}
   onSubmit={handleSubmit}
  >
   {(x: any) => (
    <StyledFooterColumn>
     <Typography
      variant='h5'
      style={{
       fontWeight: 'bold'
      }}
     >
      Newsletter (Don't work)
     </Typography>
     <form
      onSubmit={x.handleSubmit}
      style={{
       border: 'black 1px'
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
      <span>
       <StyledButton type='submit' disabled={x.isSubmitting}>
        Subscribe
       </StyledButton>
      </span>
     </form>
     <IconsRow dim='40px' />
    </StyledFooterColumn>
   )}
  </Formik>
 );
};

export const NewsletterForm = withRouter(NewsletterFormComponent);
