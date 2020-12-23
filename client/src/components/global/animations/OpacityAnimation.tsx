import React from 'react'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'

export const OpacityAnimationContainer: React.FC<{
 children: React.ReactNode
 isVisible: boolean
}> = ({ children }) => {
 return (
  <VisibilitySensor>
   {({ isVisible }) => (
    <Spring
     delay={100}
     to={{
      opacity: isVisible ? 1 : 0,
     }}
    >
     {({ opacity }) => <div style={{ opacity }}>{children}</div>}
    </Spring>
   )}
  </VisibilitySensor>
 )
}
