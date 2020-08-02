import axios, { AxiosResponse } from 'axios';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
 checkoutValidationSchema,
 StyledContainerFlex,
 StyledForm,
 StyledInput,
 StyledItemFlex,
 StyledTitleForm,
 SubmitButtonSection
} from '..';
import CheckoutImage from '../../assets/images/checkout/shopping-2183075-0.svg';
import { Items } from '../global';
import { Checkout } from '../global/InterfacesTS/checkout.interface';

interface Props extends Checkout, RouteComponentProps<{}> {
 items?: Items;
 handleSubmit?: (values: any, actions: any) => void;
 userId?: number;
}

const CheckoutFormComponent: React.FC<Props> = ({ items, userId }) => {
 const [responseMessage, setResponseMessage] = useState<string>('');
 const handleSubmit = async (values: any, actions: any) => {
  try {
   const {
    firstName,
    lastName,
    companyName,
    phoneNumber,
    email,
    country,
    adress,
    postcode
   } = values;
   const res: AxiosResponse<any> = await axios.post('/api/checkout', {
    firstName,
    lastName,
    companyName,
    phoneNumber,
    email,
    country,
    adress,
    postcode,
    orderedItems: items
   });
   const {
    data: { success }
   }: any = res;
   if (success === true) {
    setResponseMessage(
     'Form was submitted. We will do our best to send your order as soon as possible'
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
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    country: '',
    adress: '',
    postcode: ''
   }}
   validationSchema={checkoutValidationSchema}
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
    <>
     <StyledForm onSubmit={handleSubmit} style={{ display: 'block' }}>
      <div>
       <img
        src={CheckoutImage}
        alt='checkout'
        style={{ width: '20rem', height: '20rem' }}
       />
      </div>
      <div>
       <StyledTitleForm>Checkout form</StyledTitleForm>
       <StyledContainerFlex
        style={{
         justifyContent: 'space-evenly',
         flexDirection: 'row'
        }}
       >
        <StyledItemFlex>
         <StyledContainerFlex
          style={{
           justifyContent: 'space-evenly',
           flexDirection: 'column'
          }}
         >
          <StyledItemFlex>
           <StyledInput
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            name='firstName'
            label='First name*'
            value={values.firstName}
           />
           {touched.firstName && errors.firstName && (
            <div>{errors.firstName}</div>
           )}
          </StyledItemFlex>
          <StyledItemFlex>
           <StyledInput
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            name='lastName'
            label='Last name'
            value={values.lastName}
           />
           {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
          </StyledItemFlex>
          <StyledItemFlex>
           <StyledInput
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            name='companyName'
            label='Company name'
            value={values.companyName}
           />
           {touched.companyName && errors.companyName && (
            <div>{errors.companyName}</div>
           )}
          </StyledItemFlex>
          <StyledItemFlex>
           <StyledInput
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            name='phoneNumber'
            label='Phone number'
            value={values.phoneNumber}
           />
           {touched.phoneNumber && errors.phoneNumber && (
            <div>{errors.phoneNumber}</div>
           )}
          </StyledItemFlex>
         </StyledContainerFlex>
        </StyledItemFlex>
        <StyledItemFlex>
         <StyledContainerFlex
          style={{
           justifyContent: 'space-evenly',
           flexDirection: 'column'
          }}
         >
          <StyledItemFlex>
           <p>Type real email to try out confirmation email</p>
           <StyledInput
            onChange={handleChange}
            type='email'
            name='email'
            label='Email*'
            value={values.email}
            onBlur={handleBlur}
           />
           {touched.email && errors.email && <div>{errors.email}</div>}
          </StyledItemFlex>
          <StyledItemFlex>
           <StyledInput
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            name='country'
            label='Country'
            value={values.country}
           />
           {touched.country && errors.country && <div>{errors.country}</div>}
          </StyledItemFlex>
          <StyledItemFlex>
           <StyledInput
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            name='adress'
            label='Adress'
            value={values.adress}
           />
           {touched.adress && errors.adress && <div>{errors.adress}</div>}
          </StyledItemFlex>
          <StyledItemFlex>
           <StyledInput
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            name='postcode'
            label='Postcode'
            value={values.postcode}
           />
           {touched.postcode && errors.postcode && <div>{errors.postcode}</div>}
          </StyledItemFlex>
         </StyledContainerFlex>
        </StyledItemFlex>
       </StyledContainerFlex>
       <SubmitButtonSection
        isSubmitting={isSubmitting}
        responseMessage={responseMessage}
       />
      </div>
     </StyledForm>
    </>
   )}
  </Formik>
 );
};

const mapStateToProps = (state: any) => {
 return {
  items: state.cartReducer.addedItems,
  userId: state.session.userId
 };
};

export const CheckoutForm = withRouter(
 connect(mapStateToProps, {})(CheckoutFormComponent)
);
