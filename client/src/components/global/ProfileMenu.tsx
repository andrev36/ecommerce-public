import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ProfileTabs } from './tabs.utils';

export interface Props {
 password?: string;
 email?: string;
 userId?: number;
 history?: any;
 session?: any;
}

const ProfileMenuComponent: React.FC<Props> = ({ session }) => {
 const [value, setValue] = React.useState(0);
 const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  setValue(newValue);
 };
 // * NOTE Fetching user data
 const [data, setData] = useState<any>([]);
 const [responseMessage, setResponseMessage] = useState<string>('');
 useEffect(() => {
  try {
   const fetchData = () => {
    axios
     .get(`/api/checkout`, { params: { userId: session.userId } })
     .then((res: AxiosResponse<any>) => {
      const {
       data: { success }
      }: any = res;
      if (success === true) {
       setData(res.data.checkouts);
      } else {
       setResponseMessage('Something went wrong. Please try again later.');
      }
     })
     .catch((err: any) => {});
   };
   fetchData();
  } catch (error) {}
 }, [session.userId]);
 const checkoutsList: any = data.map(({ orderedItems }: any, i: number) => {
  return (
   <ul key={i}>
    {orderedItems.map((item: any, j: number) => {
     return (
      <li key={j}>
       <p>Title: {item.title}</p>
       <p>Quantity: {item.quantity}</p>
      </li>
     );
    })}
   </ul>
  );
 });
 return (
  <ProfileTabs
   value={value}
   handleChange={handleChange}
   data={data}
   session={session}
   responseMessage={responseMessage}
   checkoutsList={checkoutsList}
  />
 );
};

const mapStateToProps = ({ session }: Props) => ({
 session
});

export const ProfileMenu = withRouter(
 connect(mapStateToProps, {})(ProfileMenuComponent)
);
