import { combineReducers } from 'redux'

const gistsReducer = (state = { gists: [], questions: [] }, action) => {
  console.log(action, 'red')
  switch (action.type) {
    case 'ADD_GISTS':
      return Object.assign(state, { gists: state.gists.concat(action.gists) })
    case 'ADD_QUESTIONS':
      return Object.assign(state, {
        questions: state.questions.concat(action.questions)
      })
    default:
      return state
  }
}

export default gistsReducer
