import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> {
 loggedIn?: boolean;
 isAdmin?: boolean;
 path?: string;
 component?: any;
 session?: any;
 userId?: number;
}

const mapStateToProps = ({ session }: Props) => ({
 loggedIn: Boolean(session.userId),
 isAdmin: Boolean(session.isAdmin)
});

const Auth = ({ loggedIn, path, component: Component }: Props) => (
 <Route
  path={path}
  render={(props) =>
   loggedIn ? <Redirect to='/myprofile' /> : <Component {...props} />
  }
 />
);

const Protected = ({ loggedIn, path, component: Component }: Props) => (
 <Route
  path={path}
  render={(props) =>
   loggedIn ? <Component {...props} /> : <Redirect to='/login' />
  }
 />
);

const AdminProtected = ({ isAdmin, path, component: Component }: Props) => (
 <Route
  path={path}
  render={(props) => (isAdmin ? <Component {...props} /> : <Redirect to='/' />)}
 />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const AdminProtectedRoute = withRouter(
 connect(mapStateToProps)(AdminProtected)
);
