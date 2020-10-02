import React, { useCallback, useEffect, useState } from 'react';
import { always, compose, invoker, prop } from 'ramda'
import { withLoading } from '../loading/Loading';
import { useDebounce } from '../../hooks/use-debounce';
import { Label } from '../ui/label/Label';
const newKeyword = compose(
  prop('value'),
  prop('target')
)
const Icon = withLoading(
  always(
    <div className="br1 bl-0 br--top br--right b--light-gray dim white pa2 right-0 flex-grow-0 flex-shrink-0">
      <span role="img" aria-label="search">🕵️</span>
    </div>
  ))

export const Search = withLoading(({ search, setSearch, setSearchData }) => {

  const debouncedSearchTerm = useDebounce(search, 500);
  const [loading, setLoading] = useState(false)
  const onSubmit = useCallback((keyword) => {
    setLoading(true)
    fetch(
      `http://api.waqi.info/search/?keyword=${keyword}&token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`
    )
      .then(invoker(0, 'json'))
      .then(prop('data'))
      .then(setSearchData)
      .then(() => setLoading(false))
  }, [setSearchData])
  // Here's where the API call happens
  // We use useEffect since this is an asynchronous action
  useEffect(
    () => {
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Fire off our API call
        onSubmit(debouncedSearchTerm)
      }
    },
    [debouncedSearchTerm, onSubmit]
  );


  return <form
    autoComplete="off"
    className="flex"
    onSubmit={onSubmit}
  >
    <div className="flex flex-column">
      <Label htmlFor="city">Search for a city</Label>
      <div className="ba br--left ba b--light-gray w5 flex items-center">
        <input
          name="city"
          type="text"
          value={search}
          placeholder="Melbourne"
          onChange={compose(
            setSearch,
            newKeyword
          )}
          className="bn ph3 pv2 flex-grow-1 flex-shrink-1"
        />
        <Icon disabled={!search} loading={loading} />
      </div>
    </div>
  </form>
})