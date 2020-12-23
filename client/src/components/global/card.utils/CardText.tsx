import React from 'react'
import { StyledCard } from '../..'
import { CardTextArea } from './CardTextArea'

export const CardText: React.FC<{ side?: string }> = ({ side }) => {
 return (
  <>
   <StyledCard side={side}>
    <CardTextArea />
   </StyledCard>
  </>
 )
}
