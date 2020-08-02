import axios, { AxiosResponse } from 'axios';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { registerValidationSchema, SubmitButtonSection } from '.';
import { StyledForm, StyledInput, StyledTitleForm } from '..';
import RegisterImage from '../../assets/images/login/authentication-2080985-0.svg';


interface Props extends RouteComponentProps<{}> {
 username?: string;
 email?: string;
 password?: string;
 history: any;
}

const RegisterFormComponent: React.FC<Props> = () => {
 const [responseMessage, setResponseMessage] = useState<string>('');
 const handleSubmit = async (values: any, actions: any) => {
  try {
   const { username, email, password } = values;
   const user = {
    username,
    email,
    password
   };
   const res: AxiosResponse<any> = await axios.post('/api/users', user);
   const {
    data: { success }
   }: any = res;
   if (success === true) {
    setResponseMessage(
     'Registration was successful. You should receive confirmation email soon.'
    );
   } else {
    setResponseMessage('Something went wrong. Please try again later.');
   }
  } catch (error) {}
 };

 return (
  <Formik
   initialValues={{
    username: '',
    email: '',
    password: ''
   }}
   validationSchema={registerValidationSchema}
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
       src={RegisterImage}
       alt='register'
       style={{ width: '15rem', height: '15rem' }}
      />
     </div>
     <div>
      <StyledTitleForm> Register form </StyledTitleForm>
      <div>
       <StyledInput
        onChange={handleChange}
        type='text'
        name='username'
        label='Username'
        value={values.username}
        onBlur={handleBlur}
       />
       {touched.username && errors.username && <div> {errors.username} </div>}
      </div>
      <div>
       <StyledInput
        onChange={handleChange}
        type='email'
        name='email'
        label='Email'
        value={values.email}
        onBlur={handleBlur}
       />
       {touched.email && errors.email && <div> {errors.email} </div>}
      </div>
      <div>
       <StyledInput
        onChange={handleChange}
        type='password'
        name='password'
        label='Password'
        value={values.password}
        onBlur={handleBlur}
       />
       {touched.password && errors.password && <div> {errors.password} </div>}
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

export const RegisterForm = withRouter(RegisterFormComponent);
