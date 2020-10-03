import { always, anyPass, cond, gt, lt, pipe, T } from 'ramda';
const NA = { text: "N/A", css: `bg-gray hover-bg-dark-gray black` };
const GOOD = { text: "Good", css: `bg-green hover-bg-dark-green white` };
const MODERATE = { text: "Moderate", css: `bg-yellow hover-bg-dark-yellow black` };
const UNHEALTHYS = { text: "Unhealthy for Sensitive Groups", css: `bg-orange hover-bg-dark-orange black` };
const UNHEALTHY = { text: "Unhealthy", css: `bg-red hover-bg-dark-red white` };
const VUNHEALTHY = { text: "Very Unhealthy", css: `bg-light-purple hover-bg-purple white` };
const HAZARDOUS = { label: "Hazardous", css: 'bg-dark-red hover-bg-dark-brown white' }
const lessThanZero = x => lt(x, 0)
const notApplicable = pipe(
  parseFloat,
  cond([
    [anyPass([isNaN, lessThanZero]), always(true)],
    [T, always(false)]
  ]));

const details =
  cond([
    [notApplicable, always(NA)],
    [gt(51), always(GOOD)],
    [gt(101), always(MODERATE)],
    [gt(151), always(UNHEALTHYS)],
    [gt(201), always(UNHEALTHY)],
    [gt(301), always(VUNHEALTHY)],
    [lt(300), always(HAZARDOUS)]
  ]);

export { NA, GOOD, MODERATE, UNHEALTHYS, UNHEALTHY, VUNHEALTHY, HAZARDOUS, details }