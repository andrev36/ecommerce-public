import Avatar from '@bit/mui-org.material-ui.avatar';
import Divider from '@bit/mui-org.material-ui.divider';
import List from '@bit/mui-org.material-ui.list';
import ListItem from '@bit/mui-org.material-ui.list-item';
import ListItemAvatar from '@bit/mui-org.material-ui.list-item-avatar';
import ListItemText from '@bit/mui-org.material-ui.list-item-text';
import { makeStyles } from '@bit/mui-org.material-ui.styles';
import Typography from '@bit/mui-org.material-ui.typography';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AdminAvatar from '../assets/images/avatar/Avatar.svg';
import { globalTheme } from '../components';

const useStyles = makeStyles((theme) => ({
 root: {
  width: 360,
  backgroundColor: theme.palette.background.paper
 },
 inline: {
  display: 'inline'
 }
}));

const AlignItemsListComponent = ({ userId }: any) => {
 const classes = useStyles();
 const [messages, setMessages] = useState<string[]>([]);
 const fetchMessages = async () => {
  const res: AxiosResponse<any> = await axios.get('/api/message', {
   params: { userId }
  });
  setMessages(res.data.messages);
 };
 useEffect(() => {
  try {
   fetchMessages();
  } catch (error) {}
  // eslint-disable-next-line
 }, []);
 return (
  <List
   className={classes.root}
   style={{ width: '100%', paddingTop: '0', paddingBottom: '0' }}
  >
   {messages.length
    ? messages.map((item: any) => (
       <div
        key={item._id}
        style={{
         backgroundColor: `${globalTheme.SECOND_COLOR}`
        }}
       >
        <ListItem alignItems='flex-start'>
         <ListItemAvatar>
          <Avatar alt='Remy Sharp' src={AdminAvatar} />
         </ListItemAvatar>
         <ListItemText
          primary='Hello world'
          secondary={
           <React.Fragment>
            <Typography component='span' variant='body2' color='textPrimary'>
             Admin
            </Typography>
            <span style={{ margin: '0 1rem' }}>{item.message}</span>
           </React.Fragment>
          }
         />
        </ListItem>
        <Divider variant='inset' component='li' />
       </div>
      ))
    : null}
  </List>
 );
};

const mapStateToProps = (state: any) => {
 return {
  userId: state.session.userId
 };
};

export const AlignItemsList = connect(
 mapStateToProps,
 {}
)(AlignItemsListComponent);
