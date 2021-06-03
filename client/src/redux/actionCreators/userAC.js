import { SIGNIN, SIGNOUT, SIGNUP } from "../types/userTypes"

export const signup = (data) => async (dispatch) => {
  console.log(data);
  const response = await fetch('http://localhost:3005/api/v1/user/signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include',
    body: JSON.stringify({data})
  })
  const newUser = await response.json()
  dispatch(signupAC(newUser))
}

export const signupAC = (newUserId, nickname = '') => {
  return {
    type: SIGNUP,
    payload: {
      id: newUserId,
      nickname,
      isAuth: true
    }
  }
}

export const signin = (email, pass) => async (dispatch) => {
  const response = await fetch('http://localhost:3005/api/v1/user/signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include',
    body: JSON.stringify({email, pass})
  })
  const user = await response.json()
  dispatch(signinAC(user))
}

export const signinAC = (userId, nickname = '') => {
  return {
    type: SIGNIN,
    payload: {
      id: userId,
      nickname,
      isAuth: true
    }
  }
}

export const signout = () => async (dispatch) => {
  const response = await fetch('http://localhost:3005/api/v1/user/signout', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include', 
  })
  const statusId = response.status
  dispatch(signoutAC(statusId))
}

export const signoutAC = () => {
  return {
    type: SIGNOUT,
    payload: {
      isAuth: false
    }
  }
}