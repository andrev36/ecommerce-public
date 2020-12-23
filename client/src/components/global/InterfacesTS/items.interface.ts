export interface Items {
 _id: ID
 id: number
 title: string
 img1: string
 img2: string
 cost: number
 color: string
 size: string[]
 length: number
 map: any
 quantity: number
}

interface ID {
 $oid: string
}
