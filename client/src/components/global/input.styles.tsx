import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const StyledInput = styled(TextField).attrs({})`
 max-width: 13rem;
 outline: none;
 color: white;
 border-radius: 5px;
 padding: 2%;
`;

export const StyledTextArea = withStyles({
 root: {
  // transform: 'translate(-24px, -10px) scale(1)'
 }
})(styled(TextField).attrs({
 id: 'outlined-multiline-static',
 variant: 'outlined'
})`
 min-width: 28rem;
`);
