export interface Checkout {
 _id?: ID
 firstName?: string
 lastName?: string
 companyName?: string
 phoneNumber?: number
 email?: string
 country?: string
 adress?: string
 postcode?: string
 orderedItems?: OrderedItem[]
 createdAt?: CreatedAt
 updatedAt?: CreatedAt
 __v?: number
}

export interface ID {
 $oid?: string
}

export interface CreatedAt {
 $date?: string
}

export interface OrderedItem {
 orderedItem: {
  id?: number
  title?: string
  img1?: string
  img2?: string
  cost?: number
  color?: string
  size?: string
  quantity?: number
 }
}
