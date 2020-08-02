import { Typography } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { StyledContainerFlex, StyledItemFlex } from '..';
import DeletePageImage from '../../../assets/images/myProfile/website-setting-2080963-0.svg';
import { StyledButton } from '../button.styles';
import { StyledInput } from '../input.styles';
import { Spinner } from '../Spinner';
import { tabsValidationSchema } from './tabsValidationSchema.utils';

export interface Props {
 password?: string;
 email?: string;
 userId?: number;
 history?: any;
 session?: any;
}

export const DeleteUserForm: React.FC<Props> = ({ session, history }) => {
 const handleSubmit = async (values: Props, actions: any) => {
  try {
   const { email, password }: Props = values;
   // * NOTE Uncomment for deleting users
   // await axios.post('/api/users/delete', { email, password });
   // session = null;
   // await history.push('/login');
  } catch (error) {}
 };
 return (
  <Formik
   initialValues={{
    email: '',
    password: ''
   }}
   validationSchema={tabsValidationSchema}
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
    <div>
     <form onSubmit={handleSubmit}>
      <StyledContainerFlex style={{ flexDirection: 'column' }}>
       <Typography variant='h4'>
        Delete account by typing email and password (disabled for Web App
        presentation purposes)
       </Typography>
       <StyledItemFlex>
        <StyledInput
         style={{ margin: '20px auto' }}
         onChange={handleChange}
         type='email'
         name='email'
         label='email'
         value={values.email}
         onBlur={handleBlur}
         variant='outlined'
        />
        {touched.email && errors.email && <div>{errors.email}</div>}
       </StyledItemFlex>
       <StyledItemFlex>
        <StyledInput
         style={{ margin: '20px auto' }}
         onChange={handleChange}
         type='password'
         name='password'
         label='Password'
         value={values.password}
         onBlur={handleBlur}
         variant='outlined'
        />
        {touched.password && errors.password && <div>{errors.password}</div>}
       </StyledItemFlex>
       <div>
        <StyledButton type='submit' disabled={isSubmitting}>
         Delete account
        </StyledButton>
       </div>
       {isSubmitting ? <Spinner /> : null}
      </StyledContainerFlex>
     </form>
     <StyledItemFlex>
      <img
       src={DeletePageImage}
       alt='delete account'
       style={{ width: '15rem', height: '15rem', margin: '2rem' }}
      />
     </StyledItemFlex>
    </div>
   )}
  </Formik>
 );
};
