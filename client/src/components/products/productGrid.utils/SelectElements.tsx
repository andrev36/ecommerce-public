import {
 FormControl,
 InputLabel,
 MenuItem,
 Select,
 Typography
} from '@material-ui/core';
import React from 'react';
import {
 FadeInContainer,
 Items,
 StyledButton,
 StyledContainerFlex,
 StyledFormSelect,
 StyledIconSearch,
 StyledInput,
 StyledItemFlex
} from '../..';
import ProductGridImage from '../../../assets/images/productGrid/online-shopping-2183066-0.svg';

interface Props {
 itemList?: Items[];
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

export const SelectElements: React.FC<Props> = ({
 handleColorChange,
 handleCostOrderChange,
 handleInput,
 handleSearchTermSubmit,
 color,
 searchTerm,
 pickedCostOrder
}) => {
 return (
  <header>
   <StyledContainerFlex
    style={{
     textAlign: 'center',
     margin: '1.5rem'
    }}
   >
    <StyledItemFlex>
     <div>
      <img
       src={ProductGridImage}
       alt='products'
       style={{ width: '20rem', height: '20rem' }}
      />
     </div>
    </StyledItemFlex>
    <StyledItemFlex
     style={{
      maxWidth: '25rem',
      margin: '1.5rem auto'
     }}
    >
     <form action='/api/products' method='GET'>
      <StyledInput
       onChange={handleInput}
       type='text'
       name='search'
       value={searchTerm}
       label='Search'
       variant='outlined'
       style={{ background: 'white' }}
      >
       Search
      </StyledInput>
      <StyledButton variant={'outlined'} onSubmit={handleSearchTermSubmit}>
       <StyledIconSearch dim={'44px'} />
      </StyledButton>
     </form>
    </StyledItemFlex>
    <StyledFormSelect
     style={{
      margin: '1.5rem auto'
     }}
    >
     <Typography variant='h4'>Filter products</Typography>
     <FadeInContainer>
      <form action='/api/products' method='GET'>
       <FormControl style={{ margin: 'auto' }}>
        <InputLabel id='demo-simple-select-label'>Price sorting</InputLabel>
        <Select
         value={pickedCostOrder}
         onChange={handleCostOrderChange}
         style={{
          minWidth: '15rem',
          margin: '0.4rem',
          padding: '5px'
         }}
         labelId='demo-simple-select-label'
         id='demo-simple-select'
        >
         <MenuItem value='Select'>Select</MenuItem>
         <MenuItem value='lowest'>Lowest to highest</MenuItem>
         <MenuItem value='highest'>Highest to lowest</MenuItem>
        </Select>
       </FormControl>
      </form>
      <form action='/api/products' method='GET'>
       <FormControl>
        <InputLabel id='demo-simple-select-label'>Choose color</InputLabel>
        <Select
         value={color}
         onChange={handleColorChange}
         style={{
          minWidth: '15rem',
          margin: '0.4rem',
          padding: '5px'
         }}
         labelId='demo-simple-select-label'
         id='demo-simple-select'
        >
         <MenuItem value=''>All colors</MenuItem>
         <MenuItem value='white'>White</MenuItem>
         <MenuItem value='black'>Black</MenuItem>
         <MenuItem value='brown'>Brown</MenuItem>
         <MenuItem value='blue'>Blue</MenuItem>
         <MenuItem value='green'>Green</MenuItem>
         <MenuItem value='orange'>Orange</MenuItem>
         <MenuItem value='yellow'>Yellow</MenuItem>
         <MenuItem value='red'>Red</MenuItem>
        </Select>
       </FormControl>
      </form>
     </FadeInContainer>
    </StyledFormSelect>
   </StyledContainerFlex>
  </header>
 );
};
