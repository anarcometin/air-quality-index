import React from 'react';
import { always, cond, gt, pipe, T } from 'ramda';
const details = pipe(
  parseInt,
  cond([
    [isNaN, always({ text: "N/A", css: `bg-gray hover-bg-dark-gray black` })],
    [gt(51), always({ text: "Good", css: `bg-green hover-bg-dark-green white` })],
    [gt(101), always({ text: "Moderate", css: `bg-yellow hover-bg-dark-yellow black` })],
    [gt(151), always({ text: "Unhealthy for Sensitive Groups", css: `bg-orange hover-bg-dark-orange black` })],
    [gt(201), always({ text: "Unhealthy", css: `bg-red hover-bg-dark-red white` })],
    [gt(301), always({ text: "Very Unhealthy", css: `bg-light-purple hover-bg-purple white` })],
    [T, always({ label: "Hazardous", css: 'bg-dark-red hover-bg-dark-brown white' })]
  ]));
export const AirQuality = ({ aqi }) => {
  const { text, css } = details(aqi)
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