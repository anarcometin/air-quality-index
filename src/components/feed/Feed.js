import React from 'react'
import { path } from 'ramda'
import 'tachyons'
import { Link } from '../link/Link';
import { isAvailable } from '../../utils'
import { Error } from '../../components/error/Error'

const getCityName = path(['city', 'name'])
const getCityCoors = path(['city', 'geo'])
const getAttributions = path(['attributions'])

const getAqi = path(['aqi'])
const Attributions = (feed) =>
  getAttributions(feed) && feed.attributions.map(({ url, name }, i) => (
    <div key={i} className="flex justify-between pv1 ph3">
      <div>{name}</div>
      <Link url={url} />
    </div>
  ))

export const Feed = ({ feed }) => {
  return isAvailable(feed) ?
    <div className="ba b--light-gray br1 ml5" style={{ width: 512 }}>
      <Error />
      {
        getCityName(feed) &&
        (<>
          <div className="pv2 ph3 flex justify-between">
            {feed.city.name}
            <div>
              {getCityCoors(feed) && (`${feed.city.geo[0]}, ${feed.city.geo[1]}`)}
            </div>
          </div>
          <div className="h4 pv2 ph3 flex justify-center items-center f1">
            {getAqi(feed) && feed.aqi}
          </div>
          <div className="f7 pv2">
            {Attributions(feed)}
          </div>
        </>
        )
      }
    </div>
    : null
}