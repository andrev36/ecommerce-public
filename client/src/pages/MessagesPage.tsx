import { Typography } from '@material-ui/core'
import React from 'react'
import MessagesImage from '../assets/images/background/new-messages-2080979-0.svg'
import { StyledCardInfoPanel } from '../components'
import { AlignItemsList } from './messagesPage.util'

const MessagesPageComponent: React.FC = () => {
 return (
  <>
   <StyledCardInfoPanel>
    <Typography variant='h3'>
     Messages from the website administrator
    </Typography>
    <div>
     <img
      src={MessagesImage}
      alt='messages'
      style={{ width: '15rem', height: '15rem' }}
     />
    </div>
    <AlignItemsList />
   </StyledCardInfoPanel>
  </>
 )
}

export const MessagesPage = MessagesPageComponent
