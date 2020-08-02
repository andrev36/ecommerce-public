import React from 'react';
import { animated, useSpring } from 'react-spring';

const calc = (x: any, y: any) => [
 -(y - window.innerHeight / 2) / 20,
 (x - window.innerWidth / 2) / 20,
 1.1
];
const trans: any = (x: any, y: any, s: any) =>
 `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const StyledContainerImageAnimated = ({ children }: any) => {
 const [props, set] = useSpring(() => ({
  xys: [0, 0, 1],
  config: { mass: 5, tension: 350, friction: 40 }
 }));
 return (
  <animated.div
   onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
   onMouseLeave={() => set({ xys: [0, 0, 1] })}
   style={{ transform: props.xys.interpolate(trans) }}
  >
   {children}
  </animated.div>
 );
};
