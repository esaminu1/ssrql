import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/gists'
import { bindActionCreators } from 'redux'

class TestContainer extends Component {
  static fetchData(store, routerArgs) {
    return store.dispatch(fetchQuestions(routerArgs))
  }

  componentDidMount() {
    if (!this.props.questions.length) this.props.fetchQuestions(this.props.match)
  }

  render(){
    return <Test questions={this.props.questions}/>
  }
}

const Test = ({ questions }) => [
  <h1 key="title">Test Page</h1>,
  questions && questions.map((q, i) => <div key={i}>{JSON.stringify(q)}</div>),
  <div key="footer">length: {questions.length}</div>
]

export default connect(
  state => ({ questions: state.questions }),
  dispatch => bindActionCreators({ fetchQuestions }, dispatch)
)(TestContainer)
