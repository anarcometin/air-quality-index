import React, { forwardRef } from 'react'
import 'tachyons'

export const Link = forwardRef(({ url }, ref) =>
  <div className="blue">
    <a href={url} ref={ref} target="_blank" rel="noopener noreferrer" className="blue link hover-light-purple">
      {url}
    </a>
  </div>)