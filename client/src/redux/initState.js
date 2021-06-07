const initState = () => {
  const state = {
    user: {
      name: '',
      role: '',
      isAuth: false,
    },
    events: [],
    avatar: null,
    history: [],
    imagePath: [],
    address: []
  }
  console.log(state.history, 'state.history');
  const fromLS = JSON.parse(window.localStorage.getItem('DoctorHause'))
  return fromLS ? fromLS : state
}

export default initState
