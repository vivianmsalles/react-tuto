import React, { useState } from 'react'

const NameForm = () => {
  const [ value, setValue ] = useState({firstName: "", lastName: ""})
  
  const handleChange = (e, field) => {
    setValue({...value, [field]: e.target.value});
  }
  
  const handleSubmit = (e) => {
    console.log(e)
    alert('A name was submitted: ' + value);
    e.preventDefault();
  }
  console.log(value)
  return(
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={value.firstName} onChange={(e) => handleChange(e, 'firstName')} />
      </label>
      <br/>
      <br/>
      <label>
        Last Name:
        <input type="text" value={value.lastName} onChange={(e) => handleChange(e, 'lastName')} />
      </label>
      <br/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default NameForm

