/*https://www.youtube.com/watch?v=4pLWpfaMe4I*/
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Form} from 'formik';
import FormikControl from '../forms/assets/FormikControl';
import * as Yup from 'yup';
import axios from '../../axios/index';

function Admin(){
const [isLogin, setIsLogin] = useState(false);
const navigate = useNavigate();
//const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const initialValues = {
    function: 'login',
    user_id: '',
    password: '',
};
const formData = new FormData();

const ValidationSchema = Yup.object({
    user_id: Yup.string().required().label('ID'),
    password: Yup.string().required().label('Password'),
});

function handleSubmit(values){
    console.log('Form data', values);
    Check(values);
}

async function Check(values){

    for(var key in values){
        formData.append(key, values[key]);
    }

    try{
        let response = await axios.post('index2.php', formData);
        //console.log('Response:', response.data);
        if(response.data === 'valid'){
            setIsLogin(true);
        }
    }catch(error){
        console.log(error);
    }
}

return(
<Formik initialValues={initialValues} validationSchema={ValidationSchema} onSubmit={handleSubmit}>
    {(formik) => {
        console.log('formik', formik);
        return(
        <div>
        <section>
        <div className="container">
        <div className="row">
        <div className="col-md-4">
            <h4>Admin Panel</h4>
            <Form>
                <FormikControl control='input' type='text' label='User ID' name='user_id' placeholder='User ID' />
                <FormikControl control='input' type='password' label='Password' name='password' placeholder='Password' />
                <button type="submit" className="float-end btn1" disabled={!(formik.isValid)}>Submit</button>
            </Form>
        </div>
        <div className="col-md-8 input-group" style={{display: isLogin ? 'block' : 'none' }}>
        <button onClick={()=>navigate('/blogread')} className="btn btn-secondary">Read all posts</button>
        <button onClick={()=>navigate('/blogcreate')} className="btn btn-secondary">Create new post</button>
        <button type="button" onClick={()=>setIsLogin(false)} className="btn btn-secondary">Signout</button>
        </div>{/*col*/}
        </div>{/*row*/}
        </div>{/*con*/}
        </section>
        </div>
        )}}
    </Formik>
    );
}
export default Admin;