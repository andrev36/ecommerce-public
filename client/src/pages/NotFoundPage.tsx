import { Typography } from '@material-ui/core';
import React from 'react';
import PageNotFoundImage from '../assets/images/404/404-error-2100965-1.svg';

export const NotFoundPage = ({ location }: any) => {
 return (
  <main
   style={{
    textAlign: 'center',
    margin: '0 auto',
    width: '100vw',
    height: '100vh'
   }}
  >
   <Typography>
    <h1>No match for {location.pathname}</h1>
   </Typography>
   <div>
    <img
     src={PageNotFoundImage}
     alt='page not found'
     style={{ width: '40rem', height: '40rem' }}
    />
   </div>
  </main>
 );
};
