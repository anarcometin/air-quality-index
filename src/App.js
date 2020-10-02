import React from 'react'
import { compose } from 'ramda'
import 'tachyons'
import { Feed } from './components/feed/Feed'
import { Stations } from './components/stations/Stations'
import { Search } from './components/search/Search'
import { withError } from './components/error/error-context'

const Container = ({
  feed,
  search,
  setFeed,
  setSearch,
  searchData,
  setSearchData,
}) => {
  return (
    <div className="flex flex-column">
      <header className="f2 pv3 ph4 bg-light-purple white flex-grow-0 flex-shrink-0">
        Air Quality Index
    </header>
      <div className="pa5 flex-grow-1 flex-shrink-0 flex items-start">
        <div>
          <Search search={search} setSearch={setSearch} setSearchData={setSearchData} />
          <div className="br1 br--bottom flex flex-column w5 bb bl br b--light-gray border-box">
            {searchData && (
              Stations(searchData, setFeed)
            )}
          </div>
        </div>
        <Feed feed={feed} />
      </div>
    </div>
  )
}

const withState = (name, setName, initialState) => (Component) => {
  const factory = React.createFactory(Component)
  class WithState extends React.Component {
    state = { [name]: initialState }

    set = (value) =>
      this.state[name] !== value
        ? (this.setState({ [name]: value }), true)
        : false

    render = () =>
      factory({ ...this.props, ...this.state, [setName]: this.set })
  }
  return WithState
}

export const App = compose(
  withError,
  withState('feed', 'setFeed', null),
  withState('search', 'setSearch', ''),
  withState('searchData', 'setSearchData', null),
)(Container)
