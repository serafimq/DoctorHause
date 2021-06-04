import { useState } from "react"

const useFormModal = () => {

  const [values, setValues] = useState({})

  const changeHandler = (e) => {
    // console.log(new Date(e._d));
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return [values, changeHandler]
}
export default useFormModal
