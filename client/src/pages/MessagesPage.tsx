import { Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import MessagesImage from '../assets/images/background/new-messages-2080979-0.svg';
import { StyledCardInfoPanel } from '../components';
import { AlignItemsList } from './messagesPage.util';

interface Props {
 session?: any;
}

const MessagesPageComponent: React.FC<Props> = ({ session }) => {
 return (
  <>
   <StyledCardInfoPanel>
    <Typography variant='h3'>
     Messages for {session.username} from website administrator
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
 );
};

const mapStateToProps = ({ session }: Props) => ({
 session
});

const mapDispatchToProps = (dispatch: any) => ({});

export const MessagesPage = connect(
 mapStateToProps,
 mapDispatchToProps
)(MessagesPageComponent);
