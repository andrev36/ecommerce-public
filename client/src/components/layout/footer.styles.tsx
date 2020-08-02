import styled from 'styled-components';
import { StyledItemFlex } from '../global/containers.styles';

export const StyledFooter = styled.footer`
 position: absolute;
 width: 100%;
 height: 10vh;
 bottom: 0;
 left: 0;
 text-align: center;
 z-index: 1;
`;

export const StyledFooterColumn = styled(StyledItemFlex)`
 margin: 20px 20px auto 20px;
`;

export const StyledWaveAnimationContainer = styled.div`
 width: 100%;
 padding-bottom: 2vh;
 display: block;
`;
