import React from 'react';
import { details } from './details';
export const AirQuality = ({ aqi }) => {
  const { text, css } = details(aqi);
  return (
    <div className={`h4 pv2 ph3 flex justify-center items-center f1 ${css} relative white bn pv2 ph3 bg-animate hide-child`} >
      {aqi}
      <span className='db absolute bottom--1 mt3 z-1 w4 w5-m w5-l bg-white ba br2 b--moon-gray pa2 shadow-5 child'>
        <p className='p f6 lh-copy near-black ma0'>Air Pollution Level: {text}</p>
        <span className="span absolute top-0 left-2 nt2 w1 h1 bg-white bl bt b--moon-gray rotate-45" />
      </span>
    </div>
  )
}