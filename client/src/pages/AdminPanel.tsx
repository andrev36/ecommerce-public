import axios, { AxiosResponse } from 'axios';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import {
 StyledButton,
 StyledCardInfoPanel,
 StyledCardInfoTitle,
 StyledTextArea,
 StyledTitleForm
} from '../components';
import { Spinner } from '../components/global';

interface Props {
 session?: any;
 message?: string;
}

const messageValidationSchema = Yup.object().shape({
 message: Yup.string().required('Message is required')
});

const AdminPanelComponent: React.FC<Props> = ({ session }) => {
 const [responseMessage, setResponseMessage] = useState<string>('');
 const handleSubmit = async (values: any, actions: any) => {
  try {
   const { message } = values;
   const { userId } = session;
   const res: AxiosResponse<any> = await axios.post('/api/message', {
    message,
    userId
   });
   const {
    data: { success }
   }: any = res;
   if (success === true) {
    setResponseMessage('Message to all users was sent');
   } else {
    setResponseMessage('Something went wrong. Please try again later.');
   }
  } catch (error) {}
 };
 return (
  <>
   <StyledCardInfoPanel>
    <StyledCardInfoTitle>
     <h1>Admin Panel</h1>
     Welcome {session.username} to Admin Panel
    </StyledCardInfoTitle>
    <Formik
     initialValues={{
      message: ''
     }}
     validationSchema={messageValidationSchema}
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
      <form
       onSubmit={handleSubmit}
       style={{
        maxWidth: '700px',
        margin: '2rem auto'
       }}
      >
       <StyledTitleForm>Send message to all users</StyledTitleForm>
       <StyledTextArea
        style={{ margin: '40px auto' }}
        onChange={handleChange}
        onBlur={handleBlur}
        name='message'
        label='Message'
        value={values.message}
        rows='8'
        multiline
       />
       {touched.message && errors.message && <div>{errors.message}</div>}
       <StyledButton type='submit' disabled={isSubmitting}>
        Submit
       </StyledButton>
       {isSubmitting ? <Spinner /> : <div />}
       <div>{responseMessage}</div>
      </form>
     )}
    </Formik>
   </StyledCardInfoPanel>
  </>
 );
};

const mapStateToProps = ({ session }: Props) => ({
 session
});

const mapDispatchToProps = () => ({});

export const AdminPanel = connect(
 mapStateToProps,
 mapDispatchToProps
)(AdminPanelComponent);
