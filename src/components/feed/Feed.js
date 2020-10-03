import React from 'react'
import { path } from 'ramda'
import 'tachyons'
import { Link } from '../link/Link';
import { isAvailable, mapIndexed } from '../../utils'
import { Error } from '../../components/error/Error'
import { AirQuality } from './aqi/Aqi'
import { Coordinates } from './coordinates/Coordinates';

const getCityName = path(['city', 'name'])

const Attributions = ({ attributions }) =>
  isAvailable(attributions)
  && (
    <div className="f7 pv2">
      {
        mapIndexed(({ url, name }, i) => (
          <div key={i} className="flex flex-column justify-between pv1 ph3">
            <div>{name}</div>
            <Link url={url} />
          </div>
        ), attributions)
      }
    </div>
  )

export const Feed = ({ feed }) => {
  return isAvailable(feed) &&
    <div className="ba b--light-gray br1 ml5" style={{ width: 512 }}>
      <Error />
      {
        getCityName(feed) &&
        (<>
          <div className="pv2 w-100 ph3 flex justify-between">
            <div className="w-60">{feed.city.name}</div>
            <Coordinates feed={feed} />
          </div>
          <AirQuality aqi={feed.aqi} />
          <Attributions attributions={feed.attributions} />
        </>
        )
      }
    </div>
}