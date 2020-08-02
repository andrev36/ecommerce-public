import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface Props {
 fetchItemsRedux: (request: any) => void;
}

export const ProductGridHook = ({ fetchItemsRedux }: Props) => {
 // * NOTE React paginate
 const PER_PAGE: number = 5;
 const [offset, setOffset] = useState<number>(0);
 const [pageCount, setPageCount] = useState<number>(0);
 const handlePageClick = (data: any) => {
  const selected: any = data.selected;
  const offset2: number = Math.ceil(selected * PER_PAGE);
  setOffset(offset2);
 };
 // * NOTE Color filter
 const [pickedColor, setPickedColor] = useState<string | unknown>('');
 const handleColorChange = async (
  e: React.ChangeEvent<{
   name?: string | undefined;
   value: unknown;
  }>,
  child: React.ReactNode
 ) => {
  setPickedColor(e.target.value);
 };
 // * NOTE Searching filter
 const [searchTerm, setSearchTerm] = useState<string>('');
 const handleInput = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => {
  setSearchTerm(e.target.value);
 };
 const handleSearchTermSubmit = (e: any) => {};
 // * NOTE Cost filter from lowest/highest
 const [pickedCostOrder, setPickedCostOrder] = useState<string | unknown>('');
 const handleCostOrderChange = (
  e: React.ChangeEvent<{
   name?: string | undefined;
   value: unknown;
  }>,
  child: React.ReactNode
 ) => {
  setPickedCostOrder(e.target.value);
 };

 // * NOTE Fetching data
 const [items, setItems] = useState<any>([]);
 const fetchItems = () => {
  axios
   .get('/api/products', {
    params: {
     limit: PER_PAGE,
     offset,
     pickedColor,
     searchTerm,
     pickedCostOrder
    }
   })
   .then((res: AxiosResponse<any>) => {
    const {
     data: { success }
    }: any = res;
    if (success === true) {
     setPickedColor(pickedColor);
     setItems(res.data.data);
     fetchItemsRedux(res.data.data);
     setPageCount(Math.ceil(res.data.meta.total_count / res.data.meta.limit));
    }
   })
   .catch((err: any) => {});
 };

 useEffect(() => {
  try {
   fetchItems();
  } catch (error) {}
  // eslint-disable-next-line
 }, [offset, pickedColor, searchTerm, pickedCostOrder]);
 return {
  items,
  handleSearchTermSubmit,
  handleInput,
  searchTerm,
  pickedCostOrder,
  handleCostOrderChange,
  pickedColor,
  handleColorChange,
  pageCount,
  handlePageClick
 };
};
