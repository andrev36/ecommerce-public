import { Typography } from '@material-ui/core';
import React from 'react';
import {
 NewsletterForm,
 StyledContainerFlex,
 StyledFooter,
 StyledFooterColumn
} from '..';
import { WaveAnimation } from '../global/animations/WaveAnimation';

export const Footer: React.FC = () => {
 return (
  <>
   <WaveAnimation />
   <StyledFooter>
    <div
     style={{
      backgroundColor: 'white'
     }}
    >
     <StyledContainerFlex
      style={{
       margin: '30px 30px 0'
      }}
     >
      <StyledFooterColumn>
       <Typography variant='h5'>Category</Typography>
       <p>Male</p>
       <p>Female</p>
      </StyledFooterColumn>
      <StyledFooterColumn>
       <Typography variant='h5'>Company</Typography>
       <p>About</p>
       <p>FAQ</p>
       <p>Contact</p>
      </StyledFooterColumn>
      <StyledFooterColumn>
       <address>
        <Typography variant='h5'>Adress</Typography>
        <p>100,Lesser Voivodership, Poland</p>
        <p>+48 421 213 303</p>
        <p>email@gmail.com</p>
       </address>
      </StyledFooterColumn>
      <NewsletterForm />
     </StyledContainerFlex>
     <aside style={{ textAlign: 'center', color: 'blue' }}>
      <a href='https://www.vecteezy.com/free-vector/blue-wave-background'>
       Blue Wave Background Vectors by Vecteezy
      </a>
     </aside>
    </div>
   </StyledFooter>
  </>
 );
};
