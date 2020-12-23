import { Typography } from '@material-ui/core'
import { Formik, FormikErrors } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import {
 loginValidationSchema,
 StyledForm,
 StyledInput,
 StyledTitleForm,
} from '..'
import { AppActions } from '../../actions/cart.types'
import { login } from '../../actions/session.actions'
import LoginImage from '../../assets/images/login/authentication-2080985-0.svg'
import { SubmitButtonSection } from './SubmitButtonSection'

interface User {
 email: string
 password: string
}

interface Props extends RouteComponentProps<{}> {
 errors?: FormikErrors<User>
 user?: User
 login: (user: User) => void
}

const LoginFormComponent: React.FC<Props> = ({ login, history }) => {
 const handleSubmit = async (
  values: { email: string; password: string },
  actions: { setSubmitting(arg0: boolean): void },
 ) => {
  try {
   const { email, password } = values
   const user = {
    email,
    password,
   }
   login(user)
   actions.setSubmitting(false)
  } catch (error) {}
  history.push('/products')
 }

 return (
  <Formik
   initialValues={{
    email: '',
    password: '',
   }}
   validationSchema={loginValidationSchema}
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
       src={LoginImage}
       alt='login'
       style={{ width: '15rem', height: '15rem' }}
      />
     </div>
     <div>
      <StyledTitleForm>Login form</StyledTitleForm>
      <div>
       <StyledInput
        onChange={handleChange}
        type='email'
        name='email'
        label='Email'
        value={values.email}
        onBlur={handleBlur}
       />
       {touched.email && errors.email && <div>{errors.email}</div>}
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
       {touched.password && errors.password && <div>{errors.password}</div>}
      </div>
      <div
       style={{
        margin: '30px auto 0',
        width: '20rem',
       }}
      >
       <Typography variant='h6'>
        To see a full website demo. Input this email: <u>example@gmail.com</u>
        <br /> and password: <br />
        <u>example</u>
       </Typography>
      </div>
      <SubmitButtonSection isSubmitting={isSubmitting} />
      <p>
       <Link to='/register'>Click here to register</Link>
      </p>
     </div>
    </StyledForm>
   )}
  </Formik>
 )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
 login: (user: User) => dispatch(login(user)),
})

export const LoginForm = withRouter(
 connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent),
)
