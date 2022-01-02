import { createStore } from 'redux'

const INNITIAL_STATE = []

function reducer(state = INNITIAL_STATE, action) {
  if (action.type === 'ADD_FAVORITES') {
    const musicExists = state.find(music => music.id === action.data.id)

    if (musicExists) {
      return [...state]
    }

    return [...state, action.data]
  }

  if (action.type === 'DELETE_FAVORITES') {
    const newState = state.filter(music => music.id !== action.data.id)

    if (newState === undefined) {
      return []
    }

    return newState
  }

  return state
}

const store = createStore(reducer)

export default store
