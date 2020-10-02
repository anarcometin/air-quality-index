import React, { useState } from 'react';
import { invoker, map, prop } from 'ramda'
import { useErrorDispatch } from '../error/error-context'

export const Stations = (data, setFeed) => {
  const dispatch = useErrorDispatch();
  const [stationData, setStationData] = useState(data)
  return <div className="pv2">
    {
      map(({ station: { name }, uid }) => (
        <div
          key={uid}
          className="pv2 ph3 flex-grow-0 flex-shrink-0 b-white ba-0 b--white tl w-100 border-box dim pointer"
          onClick={() =>
            fetch(
              `http://api.waqi.info/feed/${name}/?token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`
            )
              .then(invoker(0, 'json'))
              .then(prop('status', 'data'))
              .then(({ status, data }) => {
                if (status === 'error')
                  dispatch({ type: "setError", error: { message: data } })

                else {
                  setStationData([])
                  dispatch({ type: "setError", error: {} })
                }
                return data
              })
              .then(setFeed)
          }
        >
          {name}
        </div>
      ), stationData)
    }
  </div>
}