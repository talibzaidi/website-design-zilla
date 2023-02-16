import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "../axios/index";

function SecBlog(){
const [posts, setPosts] = useState([]);
const navigate = useNavigate();

useEffect(() => {
    fetchData();
  }, []);
  
async function fetchData(){
    const result = await axios.post('index.php');
    const data = eval(result.data);
    setPosts(data);
}

function removeTags(str){
  if ((str===null) || (str===''))
      return false;
  else
      str = str.toString();
        
  // Regular expression to identify HTML tags in 
  // the input string. Replacing the identified 
  // HTML tag with a null string.
  return str.replace( /(<([^>]+)>)/ig, '');
}

function Post_detail(i){
  navigate('/post-detail', {
    state: {
      i,
    }
  });
}

return(
<section className='blog1'>
<div className="container">
<div className="row">
{
  posts && posts.length > 0 && posts.map((i) => (
    <div className="col-md-6" key={i.id} onClick={()=>Post_detail(i)}>
      <h6>{i.author} <span></span></h6>
      <h4>{i.heading}</h4>
      <div className='arrow1'><h6 className='effect1'>{removeTags(i.text)}</h6><i className='fa fa-arrow-right'></i></div>
    </div>
  ))
}
</div>
</div>
</section>
);
}
export default SecBlog;