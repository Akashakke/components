import React from 'react'
import { useFormik} from "formik";
import './App.css';
import axios from 'axios';
function Createuser() {
  const formik = useFormik(
    {
      initialValues : {
        name : "",
        position : "",
        office : "",
        age : "",
        startDate : "",
        salary : ""
      },
      validate : (values) => {
        let errors = {};
        if(values.name ===""){
          errors.name="please enter a username"
        }
        if (values.name.length <5){
          errors.name ="Please enter greater than 5"
        }
        if(values.position ===""){
          errors.position = "Please enter position"
        }
        return errors;
      },
      onSubmit: async (values) => {
      let user= await  axios.post("http://localhost:3000/user",values)
      alert("User Created")
      },
    }
  );
  return (
    <>
    <div className='container'>
      <form onSubmit={formik.handleSubmit } >
      <div className="row">
        <div className='col-lg-6'>
          <label>name</label>
          <input className='form-control' type={"text"}
          value={formik.values.name}
          onChange={formik.handleChange }
          name="name"
           />
           <span style={{color:'red'}}>{formik.errors.username} </span>
        </div>
        <div className='col-lg-6'>
          <label>Position</label>
          <input className={`form-control ${formik.errors.position ? `input-error`: ``}`}
          type={"text"}
          value={formik.values.position}
          onChange={formik.handleChange }
          name="position"/>
          <span style={{color:'red'}}>{formik.errors.position} </span>
        </div>
        <div className='col-lg-6'>
          <label>Office</label>
          <input className='form-control' type={"text"}
          value={formik.values.office}
          onChange={formik.handleChange }
          name="office"/>
        </div>
        <div className='col-lg-6'> 
          <label>Age</label>
          <input className='form-control' type={"text"}
          value={formik.values.age}
          onChange={formik.handleChange }
          name="age"/>
        </div>
        <div className='col-lg-6'>
          <label>Start date</label>
          <input className='form-control' type={"text"}
          value={formik.values.startDate}
          onChange={formik.handleChange }
          name="startDate"/>
        </div>
        <div className='col-lg-6'>
          <label>Salary</label>
          <input className='form-control' type={"text"}
          value={formik.values.salary}
          onChange={formik.handleChange }
          name="salary"
          />
          
        </div>
        <div className='col-lg-6'>
          
          <input className='btn-primary' type={"submit"} value="Submit"
          disabled={!formik.isValid} />
          
        </div>
      </div>
      </form>
    </div>
    </>
  )
}

export default Createuser

