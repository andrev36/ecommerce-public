import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useMedia } from 'react-use';
import VisibilitySensor from 'react-visibility-sensor';

const FadeInSide = ({ isVisible, children, side }: any) => {
 const isWide = useMedia('(min-width: 500px) ');
 let firstTranslateValue: any = '';
 let secondTranslateValue: any = '';
 switch (side) {
  case 'leftSide':
   firstTranslateValue = 'translateX(0)';
   secondTranslateValue = 'translateX(-50px)';
   break;
  case 'topSide':
   firstTranslateValue = 'translateY(0)';
   secondTranslateValue = 'translateY(-50px)';
   break;
  case 'bottomSide':
   firstTranslateValue = 'translateY(0)';
   secondTranslateValue = 'translateY(50px)';
   break;
  default:
   firstTranslateValue = 'translateX(0)';
   secondTranslateValue = 'translateX(50px)';
   break;
 }
 const props = useSpring({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? `${firstTranslateValue}` : `${secondTranslateValue}`
 });
 const propsMobile = useSpring({
  opacity: isVisible ? 1 : 0
 });
 if (isWide) {
  return <animated.div style={props}>{children}</animated.div>;
 } else {
  return <animated.div style={propsMobile}>{children}</animated.div>;
 }
};

export const FadeInContainer = ({ children, side }: any) => {
 const [isVisible, setVisibility] = useState(false);
 const onChange = (visiblity: any) => {
  visiblity && setVisibility(visiblity);
 };
 return (
  <VisibilitySensor onChange={onChange}>
   <FadeInSide isVisible={isVisible} side={side}>
    {children}
   </FadeInSide>
  </VisibilitySensor>
 );
};
