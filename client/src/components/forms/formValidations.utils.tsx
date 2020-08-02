import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
 username: Yup.string().required('Username is required'),
 email: Yup.string().email('Invalid field value').required('Email is required'),
 password: Yup.string().required('Password is required')
});

export const newsletterValidationSchema = Yup.object().shape({
 email: Yup.string().email('Invalid email form').required('Email is required')
});

export const loginValidationSchema = Yup.object().shape({
 email: Yup.string().email('email is not valid').required('email is required'),
 password: Yup.string().required('password is required')
});

export const emailValidationSchema = Yup.object().shape({
 email: Yup.string().email('email is not valid').required('email is required'),
 messageEmail: Yup.string().required('message is required')
});

export const checkoutValidationSchema = Yup.object().shape({
 firstName: Yup.string().required('field is required'),
 email: Yup.string().required('field is required').email('email is required')
});
