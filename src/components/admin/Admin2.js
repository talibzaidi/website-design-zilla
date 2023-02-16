import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import axios from '../../axios/index';

function Admin2(){
const initialValues={
    file1: [],
}
function handleSubmit(values){
    Check(values);
}
function Check(values){
let data = new FormData();
values.file1.forEach((f1, index) => {
    data.append(`f1$`, values.file1[index]);
});
data.append('function', 'upload_multiple_files');
axios.post("index2.php", data)
    .then((response) => {
    console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
}
const ValidationSchema = Yup.object({
    //file1: Yup.mixed().nullable().required().test('FILE_SIZE', 'Size is too big', (value)=> !value || (value && value.size <= 1024 * 1024)).test('FILE_FORMAT', 'Unsupported format', (value)=> !value || (value && SUPPORTED_FORMATS.includes(value.type))),
});
  return (
    <Formik initialValues={initialValues} validationSchema={ValidationSchema} onSubmit={handleSubmit} enctype="multipart/form-data">
      {(formik) => {
        return (
          <div>
            <section>
            <Form>
              <input id="file" name="file1" type="file"
                onChange={(event) => { const files = event.target.files; let myFiles =Array.from(files); formik.setFieldValue("file1", myFiles); }} multiple="multiple" />
              <ErrorMessage name="file1"/>
              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
            </section>
          </div>
        );
      }}
    </Formik>
  );
}

export default Admin2;