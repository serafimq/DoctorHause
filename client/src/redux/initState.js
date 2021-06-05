const initState = () => {
  const state  = {
    user: {
      name: '',
      role: '',
      isAuth: false,
    },
    doctor: {
      spec: '',
      name: '',
      email: '',
      stage: '',
      phone: '',
      metro: '',
    }
  }
  const fromLS = JSON.parse(window.localStorage.getItem('DoctorHause'))
  return fromLS ? fromLS : state
}

export default initState
