import React from 'react';
import { connect } from 'react-redux';
import { ProfileMenu } from '../components/global/ProfileMenu';

const ProfileComponent: React.FC = () => {
 return (
  <>
   <main style={{ position: 'relative', margin: '100px auto' }}>
    <ProfileMenu />
   </main>
  </>
 );
};

const mapStateToProps = null;

export const ProfilePage = connect(mapStateToProps)(ProfileComponent);
