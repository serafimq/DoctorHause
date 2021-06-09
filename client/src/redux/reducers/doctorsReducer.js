import { SET_DOCTORS, SORT_DOCTORS } from '../types/doctorsTypes'

export default function doctorsReducer(state = [], action) {
  console.log('hi', state)
  switch (action.type) {

    case SET_DOCTORS:
      return action.payload;

    case SORT_DOCTORS:

      const field = action.payload.e
      const direction = action.payload.sorted ? -1 : 1

      const sortedDoctor = state.sort((a, b) => {
        console.log(field, "feeeeeed")

        if (Array.isArray(a[field])) {
          let sumA = a.feedBack.reduce((acc, el) => acc + el.stars, 0) / a.feedBack.length
          let sumB = b.feedBack.reduce((acc, el) => acc + el.stars, 0) / b.feedBack.length
          return sumB - sumA
        } else {

          if (a[field] === b[field]) return 0;
          return a[field] > b[field] ? direction : -direction;
        }


      })
      return sortedDoctor


    default:
      return state
  }
}
