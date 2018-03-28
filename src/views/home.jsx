import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGists } from '../actions/gists'
import { bindActionCreators } from 'redux'

class HomeContainer extends Component {
  static fetchData(store, routeArgs) {
    return store.dispatch(fetchGists(routeArgs))
  }

  componentDidMount() {
    if (!this.props.gists.length) this.props.fetchGists()
  }

  render() {
    return <Home gists={this.props.gists} />
  }
}

const Home = ({ gists }) => {
  return [
    <h1 key="title">Home Page</h1>,
    gists && gists.map(g => <div key={g.url}>{JSON.stringify(g)}</div>)
  ]
}

export default connect(
  state => {
    return { gists: state.gists }
  },
  dispatch => bindActionCreators({ fetchGists }, dispatch)
)(HomeContainer)
