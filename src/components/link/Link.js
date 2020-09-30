import React, { forwardRef } from 'react'
import 'tachyons'

export const Link = forwardRef(({ url }, ref) =>
  <div className="blue pl3">
    <a href={url} ref={ref} target="_blank" rel="noopener noreferrer">
      {url}
    </a>
  </div>)