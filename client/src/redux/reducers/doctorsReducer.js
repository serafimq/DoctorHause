import { SET_DOCTORS, SORT_DOCTORS } from '../types/doctorsTypes'

export default function doctorsReducer(state = [], action) {
  switch (action.type) {
    case SET_DOCTORS:
      return action.payload;

    case SORT_DOCTORS:
      console.log(action.payload.e.target.value, 'action');
      const field = action.payload.e.target.value
      const direction = action.payload.sorted ? -1 : 1
      const sortedDoctor = state.sort((a, b) => {
        if (a[field] === b[field]) return 0;
        return a[field] > b[field] ? direction : -direction;

      })
      return [...sortedDoctor]


    default:
      return state
  }
}
