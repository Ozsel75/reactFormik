import React from 'react'
import {useFormik} from "formik"
import myValidationSchema from "./Validators"

function MyFormYup() {
    let formik=useFormik({
        initialValues:{
            evenNumber:"",
            colors:[]
        },
        onSubmit: (values)=>{
            console.log(values)

        },
        validationSchema: myValidationSchema
    })

    
  return (
    <div>MyFormYup
        
        <form style={{padding: "18px"}} onSubmit={formik.handleSubmit}>
                <span> Bir çift sayı girin:</span>
                <br/>
                <input name="evenNumber" onChange={formik.handleChange}/>
                <br/>
                {formik.errors.evenNumber && <div>{formik.errors.evenNumber}</div>}
                <br/>
                <span> En sevdiğiniz 2 rengi seçin:</span>
                <br/>
                <br/>
                <span>Kırmızı</span><input type={"checkbox"}  value="red" name="colors" onChange={formik.handleChange} />
                <br/>
                <br/>
                <span>Yeşil</span>  <input type={"checkbox"}  value="green" name="colors" onChange={formik.handleChange} />
                <br/>
                <br/>
                <span>Mavi</span>  <input type={"checkbox"}   value="blue" name="colors" onChange={formik.handleChange} />
                <br/>
                {formik.errors.colors && <div>{formik.errors.colors}</div>}
                <input type={"submit"}/>
            </form>
    </div>
  )
}

export default MyFormYup