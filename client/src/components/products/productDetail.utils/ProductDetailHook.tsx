import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Items } from '../..';
import { getStaticPath } from '../../../util/getStaticPath.utils';

interface Props {
 addToCart: (id: number) => void;
 id?: number;
 item?: Items;
 match?: any;
 session?: any;
}

export const ProductDetailHook = ({ addToCart, match }: Props) => {
 const handleClick = async (id: number, product: Items, userId: string) => {
  addToCart(id);
  await axios.post(`/api/cart/add/${id}`, {
   product,
   userId
  });
 };
 // * NOTE Get base URL depending on environment
 const baseURL = getStaticPath();
 // * NOTE Fetching single product
 const [item, setItem] = useState<any>([]);
 useEffect(() => {
  try {
   const fetchItem = () => {
    axios
     .get(`/api/products/${match.params.productID}`)
     .then((res: AxiosResponse<any>) => {
      const {
       data: { success }
      }: any = res;
      if (success === true) {
       setItem(res.data.data);
      }
     })
     .catch((err: any) => {});
   };
   fetchItem();
  } catch (error) {}
  // eslint-disable-next-line
 }, []);
 return {
  baseURL,
  item,
  handleClick
 };
};
