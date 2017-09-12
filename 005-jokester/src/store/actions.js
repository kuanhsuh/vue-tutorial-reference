import * as types from './mutation-types'

const ROOT_URL =  'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
const ONE_JOKE = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'


export const initJokes = ({commit})=>{
  fetch(ROOT_URL, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json))
} 

export const addJoke = ({commit}) => {
  fetch(ONE_JOKE, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.ADD_JOKE, json))
}

export const removeJoke = ({commit}, index) => {
  commit(types.REMOVE_JOKE, index)
  
}