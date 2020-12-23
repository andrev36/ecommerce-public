import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
 StyledProductGridImage,
 StyledProductGridItemPriceContainer,
 StyledProductGridProduct,
} from '..'
import { Items, StyledButton, StyledContainerImage } from '../..'
import { getStaticPath } from '../../../util/getStaticPath.utils'

interface Props {
 addToCart: (id: number) => void
 items?: Items[]
}

// * NOTE Mapping filtered values to components
export const ProductGridItemList: any = ({
 items,
 addToCart,
}: Props): JSX.Element[] | undefined => {
 // * NOTE Get base URL depending on environment
 const { staticPath, protocol } = getStaticPath()
 // * NOTE Redux cart ADD TO CART
 const handleAddToCartClick = async (id: number) => {
  addToCart(id)
 }
 return items?.map((item: Items) => {
  return (
   <StyledProductGridProduct key={item.id}>
    <Grid container alignItems='center'>
     <Grid item xs>
      <div
       style={{
        display: 'flex',
        justifyContent: 'space-between',
       }}
      >
       <Typography gutterBottom variant='h5'>
        {item.title}
       </Typography>
       <StyledProductGridItemPriceContainer>
        <Typography gutterBottom variant='h5'>
         {item.cost}$
        </Typography>
       </StyledProductGridItemPriceContainer>
      </div>
     </Grid>
    </Grid>
    <StyledContainerImage>
     <NavLink to={`/products/${item.id}`}>
      <StyledProductGridImage
       src={`${protocol}://${staticPath}/static/products/product${
        item.id + 1
       }/1.jpg`}
       alt='t-shirt'
      />
     </NavLink>
    </StyledContainerImage>
    <Typography
     color='textSecondary'
     variant='body2'
     style={{
      margin: '1.25rem auto',
     }}
    >
     Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
     just down the hall.
    </Typography>
    <Divider variant='middle' />
    <div>
     <NavLink to={`/products/${item.id}`}>
      <StyledButton
       type='button'
       style={{
        margin: '3rem 1rem',
       }}
      >
       View
      </StyledButton>
     </NavLink>
     <StyledButton
      type='button'
      onClick={() => {
       handleAddToCartClick(item.id)
      }}
      style={{
       margin: '3rem 1rem',
      }}
     >
      Add to cart
     </StyledButton>
    </div>
   </StyledProductGridProduct>
  )
 })
}
