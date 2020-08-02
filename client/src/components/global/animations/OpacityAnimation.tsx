import React from 'react';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';

export const OpacityAnimationContainer = ({ children }: any) => {
 return (
  <VisibilitySensor>
   {({ isVisible }: any) => (
    <Spring
     delay={100}
     to={{
      opacity: isVisible ? 1 : 0
     }}
    >
     {({ opacity }) => <div style={{ opacity }}>{children}</div>}
    </Spring>
   )}
  </VisibilitySensor>
 );
};
