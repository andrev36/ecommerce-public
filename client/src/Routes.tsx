import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Cart } from './components';
import {
 AboutPage,
 AccountConfirmationPage,
 AdminPanel,
 CheckoutPage,
 ContactPage,
 LoginPage,
 LogoutPage,
 MainPage,
 MessagesPage,
 ProductDetailPage,
 ProductsPage,
 ProfilePage,
 RegisterPage
} from './pages';
import { NotFoundPage } from './pages/NotFoundPage';
import {
 AdminProtectedRoute,
 AuthRoute,
 ProtectedRoute
} from './util/Route.utils';

export const Routes = () => {
 return (
  <>
   <Switch>
    <Route exact path='/' component={MainPage} />
    <AuthRoute path='/login' component={LoginPage} />
    <AuthRoute path='/register' component={RegisterPage} />
    <Route path='/checkout' component={CheckoutPage} />
    <Route path='/contact' component={ContactPage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/cart' component={Cart} />
    <Route path='/confirmation' component={AccountConfirmationPage} />
    <Route exact path='/products' component={ProductsPage} />
    <Route exact path='/logout' component={LogoutPage} />
    <Route exact path='/products/:productID' component={ProductDetailPage} />
    <ProtectedRoute path='/myprofile' component={ProfilePage} />
    <ProtectedRoute path='/messages' component={MessagesPage} />
    <AdminProtectedRoute path='/admin' component={AdminPanel} />
    <Route component={NotFoundPage} />
   </Switch>
  </>
 );
};
