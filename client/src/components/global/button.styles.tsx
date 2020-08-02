import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';
import styled from 'styled-components';
import { FadeInContainer } from '.';
import { globalTheme } from './globalTheme.styles';
import { device } from './mediaQueries.styles';

const CheckboxStyle = {
 root: {
  color: `${globalTheme.FOURTH_COLOR}`,
  background: `${globalTheme.SECOND_COLOR}`,
  '&$checked': {
   background: `${globalTheme.FIFTH_COLOR}`
  }
 }
};

const ButtonStyle = {
 root: {
  color: 'white',
  background: `${globalTheme.FIFTH_COLOR}`,
  textDecoration: 'none',
  '&:hover': {
   background: `${globalTheme.FOURTH_COLOR}`
  }
 }
};

export const StyledButton = withStyles(ButtonStyle)(styled(Button).attrs(
 (props: any) => ({
  color: props.color || 'default',
  variant: props.variant || 'contained'
 })
)`
 display: block;
 text-align: left;
 margin: 0.1rem;
 padding: 0.15rem 0.15rem;
 z-index: 1;
`);

export const StyledButtonMainPageNotAnimated = withStyles(ButtonStyle)(styled(
 Button
)`
 width: 8rem;
 height: 3.5rem;
 span {
  font-size: 1.6rem;
 }
 @media ${device.LAPTOP} {
  width: 15rem;
  height: 6rem;
  span {
   font-size: 3.5rem;
  }
 }
`);

export const StyledButtonMainPage = ({ children, rightSide }: any) => {
 return (
  <FadeInContainer rightSide={rightSide}>
   <StyledButtonMainPageNotAnimated>{children}</StyledButtonMainPageNotAnimated>
  </FadeInContainer>
 );
};

export const StyledCheckbox = withStyles(CheckboxStyle)(styled(Checkbox).attrs({
 color: 'default'
})`
 height: 20px;
 width: 20px;
`);

export const StyledButtonAboutPageNotAnimated = withStyles(ButtonStyle)(styled(
 Button
)`
 width: 6rem;
 height: 3rem;
 span {
  font-size: 1rem;
 }
 @media ${device.LAPTOP} {
  width: 16rem;
  height: 7rem;
  span {
   font-size: 3rem;
  }
 }
`);

export const StyledButtonAboutPage = ({ children, side }: any) => {
 return (
  <FadeInContainer side={side}>
   <StyledButtonAboutPageNotAnimated>
    {children}
   </StyledButtonAboutPageNotAnimated>
  </FadeInContainer>
 );
};

export const StyledButtonNavbarMenu = styled(StyledButton)`
 width: 100%;
 height: 100%;
`;
