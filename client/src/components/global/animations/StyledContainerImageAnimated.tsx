import React from 'react'
import { animated, useSpring } from 'react-spring'

const calc = (x: number, y: number): number[] => [
 -(y - window.innerHeight / 2) / 20,
 (x - window.innerWidth / 2) / 20,
 1.1,
]

const trans: any = ({ x, y, s }: { x: string; y: string; s: string }) =>
 `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const StyledContainerImageAnimated: React.FC<{
 children: React.ReactNode
}> = ({ children }) => {
 const [props, set] = useSpring(() => ({
  xys: [0, 0, 1],
  config: { mass: 5, tension: 350, friction: 40 },
 }))
 return (
  <animated.div
   onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
   onMouseLeave={() => set({ xys: [0, 0, 1] })}
   style={{ transform: props.xys.interpolate(trans) }}
  >
   {children}
  </animated.div>
 )
}
