import React from 'react';
import { path, ifElse, pipe, isNil } from 'ramda';
import 'tachyons'
const toDecimal = (num, n) => (Math.round(num * 100) / 100).toFixed(n)
const Marker = ({ className, height, fill = "currentColor" }) =>
  <svg
    className={className}
    height={height}
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="map-marker-alt"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512">
    <path fill={fill} d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
  </svg>
const Geo = geo => ifElse(
  isNil,
  () => null,
  (g) =>
    <div className="f7 silver">
      <Marker className="mr1" height="1rem" fill="gray" />
      {`${toDecimal(g[0], 6)}, ${toDecimal(g[1], 6)}`}
    </div>
)(geo)
export const Coordinates = ({ feed }) => pipe(path(['city', 'geo']), Geo)(feed)
