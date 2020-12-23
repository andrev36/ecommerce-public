import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { Items } from '../..'
import { getStaticPath } from '../../../util/getStaticPath.utils'

interface Props {
 addToCart: (id: number) => void
 id?: number
 item?: Items
 res?: AxiosResponse<{
  data?: { success: boolean }
 }>
 match?: any
}

export const ProductDetailHook = ({ addToCart, match }: Props) => {
 const handleClick = async (id: number) => {
  addToCart(id)
 }
 // * NOTE Get base URL depending on environment
 const {
  staticPath,
  protocol,
 }: { staticPath: string | undefined; protocol: string } = getStaticPath()
 // * NOTE Fetching single product
 const [item, setItem] = useState<Items>()
 useEffect(() => {
  try {
   const fetchItem = () => {
    axios
     .get(`/api/products/${match.params.productID}`)
     .then((res) => {
      const {
       data: { success },
      } = res
      if (success === true) {
       setItem(res.data.data)
      }
     })
     .catch((err) => {})
   }
   fetchItem()
  } catch (error) {}
  // eslint-disable-next-line
 }, [])
 return {
  staticPath,
  item,
  handleClick,
  protocol,
 }
}
