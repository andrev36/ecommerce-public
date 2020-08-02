import { Typography } from '@material-ui/core';
import React from 'react';
import { Items, StyledContainerFlex } from '../../global';
import { SelectElements } from './SelectElements';

interface GridLayoutProps {
 productGridItemList?: Items[];
 handleInput: (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => void;
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
}

export const GridLayout: React.FC<GridLayoutProps> = ({
 productGridItemList,
 handleColorChange,
 handleCostOrderChange,
 handleInput,
 handleSearchTermSubmit,
 color,
 searchTerm,
 pickedCostOrder
}) => {
 return (
  <>
   <article
    style={{
     padding: '20px auto',
     margin: '10rem auto 0 auto'
    }}
   >
    <header
     style={{
      textAlign: 'center'
     }}
    >
     <Typography variant='h2'>Product grid</Typography>
     <Typography variant='h4'>Ecommerce product grid.</Typography>
    </header>
    <SelectElements
     handleColorChange={handleColorChange}
     handleCostOrderChange={handleCostOrderChange}
     handleInput={handleInput}
     handleSearchTermSubmit={handleSearchTermSubmit}
     color={color}
     searchTerm={searchTerm}
     pickedCostOrder={pickedCostOrder}
    />
    <main>
     <StyledContainerFlex
      style={{
       alignItems: 'center',
       justifyContent: 'space-evenly',
       textAlign: 'left',
       flex: '1',
       margin: '20px auto'
      }}
     >
      {productGridItemList}
     </StyledContainerFlex>
    </main>
   </article>
  </>
 );
};
