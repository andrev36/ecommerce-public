import * as Yup from 'yup'

export const tabsValidationSchema = Yup.object().shape({
 email: Yup.string().email('insert valid email').required('email is required'),
 password: Yup.string().required('password is required'),
})
