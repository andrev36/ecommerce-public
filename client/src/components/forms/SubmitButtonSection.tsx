import React from 'react'
import { Spinner, StyledButton } from '..'

interface Props {
 isSubmitting: boolean
 responseMessage?: string
}

export const SubmitButtonSection = ({
 isSubmitting,
 responseMessage,
}: Props) => {
 return (
  <>
   <div>
    <StyledButton
     type='submit'
     disabled={isSubmitting}
     style={{ margin: '5px auto' }}
    >
     Submit
    </StyledButton>
   </div>
   {isSubmitting ? <Spinner /> : <div />}
   <div>{responseMessage}</div>
  </>
 )
}
