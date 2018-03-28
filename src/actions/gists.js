export function fetchGists() {
  return dispatch =>
    fetch('https://api.github.com/gists')
      .then(r => r.json())
      .then(gists => dispatch(addGists(gists)))
}

export function fetchQuestions({ params: { amount = 10 } }) {
  return dispatch =>
    fetch(`https://opentdb.com/api.php?amount=${amount}`)
      .then(r => r.json())
      .then(qs => dispatch(addQuestions(qs.results)))
}

export function addGists(gists) {
  return {
    type: 'ADD_GISTS',
    gists
  }
}

export function addQuestions(questions) {
  return {
    type: 'ADD_QUESTIONS',
    questions
  }
}
