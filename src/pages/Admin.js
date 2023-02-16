/*https://www.youtube.com/watch?v=4pLWpfaMe4I*/
import React from "react";
import {useNavigate} from 'react-router-dom';
import BlogRead from '../components/admin/BlogRead';

function Admin(){
const navigate = useNavigate();
return(
    <section className='admin1'>
    <div className="container">
    <div className="row">
    <div className="col-md-12">
        <h3 className="float-start">Admin panel: Writer</h3>
        <button onClick={()=>navigate('/blogcreate')} className="btn btn-secondary float-end">Create new</button>
        <div className="clearfix"></div>
        <BlogRead />
    </div>{/*col*/}
    </div>{/*row*/}
    </div>{/*con*/}
    </section>
    )
}
export default Admin;