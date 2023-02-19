import React from "react";
import './index.css';
import {useFormik} from "formik";

function App() {
  const formik = useFormik({
    initialValues:{
      emailField: '',
      pswField: '',
      submitBtn: ''
    },

    onSubmit: values => {
      console.log('form:', values);
    },

    validate: values =>{
      let errors = {};
      if(!values.emailField) errors.emailField = 'Field required';
      if(!values.pswField) errors.pswField = 'Field required';
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) errors.submitBtn = 'Username should be an email';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div>Username</div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>

        {formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div> : null}
        
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>

        {formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div> : null}

        <div style={{color:'red'}}>
          <button name="submitBtn" type="submit" value={formik.values.submitBtn} onClick={() => {
            if (formik.errors.submitBtn) {
              return alert('Username should be an email')
            } else if (!formik.errors.pswField && !formik.errors.emailField) {
              return alert ('Login Successful!')
            }
          }}
          >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
