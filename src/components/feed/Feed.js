import React from 'react'
import { path } from 'ramda'
import 'tachyons'
import { Link } from '../link/Link';
import { isAvailable, mapIndexed } from '../../utils'
import { Error } from '../../components/error/Error'
import { AirQuality } from './aqi/Aqi'

const getCityName = path(['city', 'name'])
const hasCoors = path(['city', 'geo'])

const Attributions = ({ attributions }) =>
  isAvailable(attributions)
  && mapIndexed(({ url, name }, i) => (
    <div key={i} className="flex flex-column justify-between pv1 ph3">
      <div>{name}</div>
      <Link url={url} />
    </div>
  ), attributions)

export const Feed = ({ feed }) => {
  return isAvailable(feed) ?
    <div className="ba b--light-gray br1 ml5 w-512 mw-100">
      <Error />
      {
        getCityName(feed) &&
        (<>
          <div className="pv2 ph3 flex justify-between">
            {feed.city.name}
            <div>
              {hasCoors(feed) && (`${feed.city.geo[0]}, ${feed.city.geo[1]}`)}
            </div>
          </div>
          <AirQuality aqi={feed.aqi} />
          <div className="f7 pv2">
            <Attributions attributions={feed.attributions} />
          </div>
        </>
        )
      }
    </div>
    : null
}