import styled from 'styled-components';
import { globalTheme } from '../global';

// PRODUCT GRID

export const StyledProductGridProduct = styled.section`
 height: 28.125rem;
 width: 18.75rem;
 padding: 0.8rem;
 margin: 1rem;
 border-radius: 20px;
 position: relative;
 background-color: ${globalTheme.SECOND_COLOR};
`;

export const StyledProductGridImage = styled.img`
 display: block;
 border-radius: 20px;
 margin-left: auto;
 margin-right: auto;
 max-height: 10rem;
 min-width: 100%;
`;

export const StyledReactPaginateWrapper = styled.nav`
 margin: 0 10vw;
 .pagination > li {
  display: inline-block;
  padding-left: 0;
  list-style: none;
  color: ${globalTheme.SECOND_COLOR};
 }
 .pagination > li > a,
 .pagination > li > span {
  position: relative;
  float: left;
  padding: 0.375rem 1.1rem;
  line-height: 3;
  text-decoration: none;
  color: black;
  background-color: ${globalTheme.SECOND_COLOR};
  margin-left: -1px;
 }

 .pagination > li.active > a {
  color: ${globalTheme.SECOND_COLOR};
  background-color: ${globalTheme.FIFTH_COLOR};
  border-color: ${globalTheme.FIFTH_COLOR};
 }

 /* Style the active class (and buttons on mouse-over) */
 .pagination > li > a:hover {
  background-color: ${globalTheme.FIFTH_COLOR};
  color: white;
  cursor: pointer;
 }
 .pagination > li:first-child > a,
 .pagination > li:first-child > span {
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  position: relative;
  float: left;
  padding: 0.375rem 1.1rem;
  line-height: 3;
  text-decoration: none;
  color: black;
  background-color: ${globalTheme.SECOND_COLOR};
  margin-left: -1px;
 }
 .pagination > li:last-child > a,
 .pagination > li:last-child > span {
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  float: left;
  padding: 0.375rem 1.1rem;
  line-height: 3;
  text-decoration: none;
  color: black;
  background-color: ${globalTheme.SECOND_COLOR}f;
  margin-left: -1px;
 }
`;

export const StyledProductGridItemPriceContainer = styled.header`
 background-color: ${globalTheme.MAIN_COLOR};
 border-radius: 15px;
 padding: 5px 10px;
 text-align: center;
 margin-bottom: 10px;
`;
