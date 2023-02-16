import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';

function Select(props){
    const {label, name, options, ...rest} = props;
    return(
    <div>
        <label htmlFor={name}>{label}</label>
        <Field as='select' id={name} name={name} {...rest}>
        {
            options.map(option=>{
                return(
                    <option key={option.key} value={option.value}>{option.value}</option>
                )
            })
        }
        </Field>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select;