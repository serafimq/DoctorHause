import { useState } from "react"

const useFormModal = () => {

  const [values, setValues] = useState({})

  const changeHandler = (e) => {
    console.log(e.dateTime, '============');
    console.log(e);
    if (e.target) {
      setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    } else {
      setValues(prev => ({ ...prev, dateTime: e.dateTime }))
    }
  }
  console.log(values, 'values');
  return [values, changeHandler]
}
export default useFormModal
