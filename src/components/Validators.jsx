import React from 'react'

import * as yup from "yup";

yup.addMethod(yup.number, "even", function (errorMessage) {
    return this.test(`isEven`, errorMessage, function (value) {
      const { path, createError } = this;
       
      return (
        value % 2 === 0 ||
        createError({ path, message: errorMessage })
      );
    });
  });
  yup.addMethod(yup.array, "lengthCheck", function (errorMessage) {
    return this.test(`IsLength2`, errorMessage, function (value) {
      const { path, createError } = this;
      
      return (
        value.length === 2 ||
        createError({ path, message: errorMessage })
      );
    });
  });

let schema = yup.object().shape({
    evenNumber: yup.number().even("Lütfen çift bir sayı girin."),
    colors: yup.array().lengthCheck("Lütfen 2 tane renk seçin.")
   
  });

  export default schema;