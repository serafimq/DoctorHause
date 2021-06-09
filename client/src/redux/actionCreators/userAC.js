import { SIGNIN, SIGNOUT, SIGNUP, SIGNUP_GOOGLE, SIGNIN_GOOGLE, DELETE } from "../types/userTypes"
import axios from 'axios'

export const signup = ({ name, role, avatar, email, pass }) => async (dispatch) => {
  const response = await fetch('http://localhost:3006/api/v1/user/signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include',
    body: JSON.stringify({ name, role, avatar, email, pass })
  })
  const newUser = await response.json()
  dispatch(signupAC(newUser))
}

export const signupAC = (newUser) => {
  return {
    type: SIGNUP,
    payload: {
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
      avatar: newUser.avatar,
      role: newUser.role,
      isAuth: true
    }
  }
}

export const succesGoogle = ({ tokenId, role }) => async (dispatch) => {
  const response = await axios.post('http://localhost:3006/api/v1/user/googlesignup', {
    withCredentials: true,
    tokenId,
    role,
  })
  dispatch(signupGoogleAC(response.data))
}

export const signupGoogleAC = (newUser) => {
  return {
    type: SIGNUP_GOOGLE,
    payload: {
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      isAuth: true
    }
  }
}

export const succesSignInGoogle = ({ tokenId }) => async (dispatch) => {
  const response = await axios.post('http://localhost:3006/api/v1/user/googlesignin', {
    withCredentials: true,
    tokenId,
  })
  dispatch(signinGoogleAC(response.data))
}

export const signinGoogleAC = (newUser) => {
  return {
    type: SIGNIN_GOOGLE,
    payload: {
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      isAuth: true
    }
  }
}

export const signin = ({ email, pass }) => async (dispatch) => {
  const response = await fetch('http://localhost:3006/api/v1/user/signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include',
    body: JSON.stringify({ email, pass })
  })
  const user = await response.json()
  dispatch(signinAC(user))
}

export const signinAC = (user) => {
  return {
    type: SIGNIN,
    payload: {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
      isAuth: true
    }
  }
}

export const signout = () => async (dispatch) => {
  const response = await fetch('http://localhost:3006/api/v1/user/signout', {
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
      isAuth: false,

    }
  }
}

export const deleteUserThunk = (id) => async (dispatch) => {
  console.log(id);
  const result = await axios.delete(`http://localhost:3006/api/v1/homepage/${id}`, {id:id});
  dispatch({
    type: DELETE,
    payload: result.data
  })
}
