import React from 'react';
import { StyledIconFacebook, StyledIconLinkedin, StyledIconTwitter } from '..';

interface DimProps {
 dim: string;
}

export const IconsRow: React.FC<DimProps> = ({ dim }) => {
 return (
  <>
   <div style={{ margin: '10px 0' }}>
    <a href='/'>
     <StyledIconFacebook dim={dim} />
    </a>
    <a href='/'>
     <StyledIconTwitter dim={dim} />
    </a>
    <a href='/'>
     <StyledIconLinkedin dim={dim} />
    </a>
   </div>
  </>
 );
};
