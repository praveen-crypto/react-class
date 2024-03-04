import React from 'react'
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';
import ValidatedForm from './ValidatedForm';



function Form() {
  return (
    <div>
        <ControlledForm />
        <UncontrolledForm/>
        <ValidatedForm />
    </div>
  )
}

export default Form;
