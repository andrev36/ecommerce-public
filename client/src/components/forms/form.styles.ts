import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { device, globalTheme, StyledItemFlex } from '../global'

export const StyledForm = styled.form`
 -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 background-color: ${globalTheme.SECOND_COLOR};
 border-radius: 10px;
 box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 display: block;
 margin: 8.125rem 0;
 width: 100%;
 @media ${device.LAPTOP} {
  margin: 8.125rem auto;
  width: 900px;
  display: flex;
  align-items: center;
 }
 div {
  margin: 0.125rem auto;
  padding: 0.475rem;
  text-align: center;
 }
`

export const StyledTitleForm = styled(Typography).attrs(() => ({
 variant: 'h4',
}))`
 margin: 30px auto 1.25rem auto;
 padding: auto;
 text-align: center;
 text-transform: uppercase;
`

export const StyledFormSelect = styled(StyledItemFlex)`
 -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 background-color: ${globalTheme.SECOND_COLOR};
 border-radius: 10px;
 box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 padding: 1.875rem;
 text-align: center;
 max-width: 23rem;
`
