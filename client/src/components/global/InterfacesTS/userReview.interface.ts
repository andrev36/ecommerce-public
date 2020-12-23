export interface UserReview {
 _id?: number | undefined
 comment?: string
 rating?: string | undefined
 userId?: string
 productID?: V
 createdAt?: CreatedAt
 updatedAt?: CreatedAt
 __v?: V
 map: any
}

export interface V {
 $numberInt?: string
}

export interface ID {
 $oid?: string
}

export interface CreatedAt {
 $date?: DateClass
}

export interface DateClass {
 $numberLong?: string
}
