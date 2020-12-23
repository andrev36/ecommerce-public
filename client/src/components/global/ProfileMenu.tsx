import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Items } from '.'
import { ProfileTabs } from './tabs.utils'

export interface Props extends RouteComponentProps<{}> {
 password?: string
 email?: string
 userId?: number
 session: {
  userId: string | null
  username: string | null
  isAdmin: boolean | null
 }
 res?: AxiosResponse<{
  data?: { success: boolean }
 }>
}

const ProfileMenuComponent: React.FC<Props> = ({ session }) => {
 const [value, setValue] = React.useState<number>(0)
 const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  setValue(newValue)
 }
 // * NOTE Fetching user data
 const [data, setData] = useState<Items[]>([])
 const [responseMessage, setResponseMessage] = useState<string>('')
 useEffect(() => {
  try {
   const fetchData = () => {
    axios
     .get(`/api/checkout`, { params: { userId: session?.userId } })
     .then((res) => {
      const {
       data: { success },
      } = res
      if (success === true) {
       setData(res.data.checkouts)
      } else {
       setResponseMessage('Something went wrong. Please try again later.')
      }
     })
     .catch((err) => {})
   }
   fetchData()
  } catch (error) {}
 }, [session?.userId])
 const checkoutsList = data?.map(
  ({ orderedItems }: any, i: number): JSX.Element => {
   return (
    <ul key={i}>
     {orderedItems.map((item: Items, j: number) => {
      return (
       <li key={j}>
        <p>Title: {item?.title}</p>
        <p>Quantity: {item?.quantity}</p>
       </li>
      )
     })}
    </ul>
   )
  },
 )
 return (
  <ProfileTabs
   value={value}
   handleChange={handleChange}
   checkoutsList={checkoutsList}
  />
 )
}

const mapStateToProps = ({ session }: Props) => ({
 session,
})

export const ProfileMenu = withRouter(
 connect(mapStateToProps, {})(ProfileMenuComponent),
)
