import styled from 'styled-components';
import { globalTheme } from '..';

export const StyledUserReviewsCard = styled.section`
 padding: 1rem;
 position: relative;
 background-color: ${globalTheme.SECOND_COLOR};
 border-radius: 4px;
 text-align: left;
`;

// * NOTE User Reviews title text
export const StyledUserReviewsTitleText = styled.header`
 margin: 4rem auto 3rem;
 display: block;
 z-index: 1;
 width: 20em;
 padding: 0.4em 1em;
 background-color: rgba(320, 320, 320, 0.7);
 border-radius: 10px;
 text-align: center;
`;
