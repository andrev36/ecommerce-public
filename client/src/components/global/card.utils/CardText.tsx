import React from 'react';
import { StyledCard } from '../..';
import { CardTextArea } from './CardTextArea';

export const CardText = ({ side }: any) => {
 return (
  <>
   <StyledCard side={side}>
    <CardTextArea />
   </StyledCard>
  </>
 );
};
