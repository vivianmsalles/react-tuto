import React, {useState} from 'react'


const useUserForm = () => {
  const [formValues, setFormValues] = useState({firstName: "", lastName: ""})
  const [errors, setErrors] = useState({})

  const onChangeFirstName = (e) => {
    setFormValues({...formValues, firstName: e.target?.value})
    if (e.target.value.length < 3 ) {
      setErrors({...errors, firstName: 'Must be larger than 3 letters'})
    } else {
      setErrors({...errors, firstName: ''})
    }
  }

  const onChangeLastName = (e) => {
    setFormValues({...formValues, lastName: e.target?.value})
    if (e.target.value.length < 3 ) {
      setErrors({...errors, lastName: 'Must be larger than 3 letters'})
    } else {
      setErrors({...errors, lastName: ''})
    }
  }

  return(
    [formValues, errors, onChangeFirstName, onChangeLastName]
  )

}

const UserForm = () => {
  const [values, mistakes, setFirstName, setLastName] = useUserForm()



  return(
  <form>
    <label>First name:</label>
    <input type="text" value={values.firstName} onChange={setFirstName} /><br/><br/>
    { mistakes.firstName && <div>{mistakes.firstName}</div> }
    <label>Last name:</label>
    <input type="text" value={values.lastName} onChange={setLastName} /><br/><br/>
    { mistakes.lastName && <div>{mistakes.lastName}</div> }
    <input type="submit" value="Submit" />
  </form>

  )
  
}

export default UserForm