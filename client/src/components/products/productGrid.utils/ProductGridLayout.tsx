import React from 'react';
import ReactPaginate from 'react-paginate';
import { GridLayout, StyledReactPaginateWrapper } from '..';

interface Props {
 searchTerm?: string;
 value?: any;
 pickedCostOrder?: string | unknown;
 handleCostOrderChange: (
  e: React.ChangeEvent<{
   name?: string | undefined;
   value: unknown;
  }>,
  child: React.ReactNode
 ) => void;
 handleColorChange: (
  e: React.ChangeEvent<{
   name?: string | undefined;
   value: unknown;
  }>,
  child: React.ReactNode
 ) => void;
 color?: string | unknown;
 handleSearchTermSubmit: (e: any) => void;
 handleInput: (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => void;
 productGridItemList?: any;
 pageCount: number;
 pickedColor: string | unknown;
 handlePageClick: (data: any) => void;
}

export const ProductGridLayout: React.FC<Props> = ({
 handleSearchTermSubmit,
 handleInput,
 searchTerm,
 pickedCostOrder,
 handleCostOrderChange,
 pickedColor,
 handleColorChange,
 pageCount,
 handlePageClick,
 productGridItemList
}) => {
 return (
  <>
   <GridLayout
    handleSearchTermSubmit={handleSearchTermSubmit}
    productGridItemList={productGridItemList}
    handleInput={handleInput}
    searchTerm={searchTerm}
    pickedCostOrder={pickedCostOrder}
    handleCostOrderChange={handleCostOrderChange}
    color={pickedColor}
    handleColorChange={handleColorChange}
   />
   <StyledReactPaginateWrapper>
    <ReactPaginate
     previousLabel={'previous'}
     nextLabel={'next'}
     breakLabel={'...'}
     breakClassName={'break-me'}
     pageCount={pageCount}
     onPageChange={handlePageClick}
     marginPagesDisplayed={2}
     pageRangeDisplayed={5}
     containerClassName={'pagination'}
     activeClassName={'active'}
     previousClassName={'previous-class-name'}
     nextClassName={'next-class-name'}
    />
   </StyledReactPaginateWrapper>
  </>
 );
};
