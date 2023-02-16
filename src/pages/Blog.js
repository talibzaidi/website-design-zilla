import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "../axios/index";

function Blog(){
const [posts, setPosts] = useState([]);
const [posts2, setPosts2] = useState([]);
const formData = new FormData();
const formData2 = new FormData();
const navigate = useNavigate();

useEffect(() => {
  get_first();
  leave_first_get_rest();
}, []);

async function get_first(){
  try{
    formData.append('function', 'get_first');
    let response = await axios.post('index2.php', formData);
    //console.log('Response:', response.data);
    setPosts(prevPosts => prevPosts = response.data);
    //console.log('Users:', users);
  }catch(err){
    console.log(err);
  }
}

async function leave_first_get_rest(){
  try{
    formData2.append('function', 'leave_first_get_rest');
    let response2 = await axios.post('index2.php', formData2);
    //console.log('Response:', response.data);
    setPosts2(prevPosts2 => prevPosts2 = response2.data);
    //console.log('Users:', users);
  }catch(err){
    console.log(err);
  }
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

function Post_detail(i, j){
  navigate('/post-detail', {
    state: {
      i,j
    }
  });
}

return(
<div>
<section className='blog2'>
<div className="container">
<div className="row">
<div className="col-md-12">
  <p className='large'>BLOG</p>
  <h1 style={{color:'black'}}>When we're not busy designing, coding, and branding, sometimes we write our thoughts</h1>
</div>
{
  posts && posts.length > 0 && posts.map((i) => (
    <div className="col-md-8 no_pad" key={i.id} onClick={()=>Post_detail(i,null)}>
      <div className='blogsstyle'>
        <p className='large'>{i.date}</p>
        <h3>{i.heading}</h3>
        <p className='effect1 large'>{removeTags(i.text)}</p>
      </div>
    </div>
  ))
}
{
  posts2 && posts2.length > 0 && posts2.map((j) => (
    <div className="col-md-4 no_pad" key={j.id} onClick={()=>Post_detail(null,j)}>
      <div className='blogsstyle'>
        <p className='large'>{j.date}</p>
        <h3>{j.heading}</h3>
        <p className='effect1 large'>{removeTags(j.text)}</p>
      </div>
    </div>
  ))
}
</div>
</div>
</section>
</div>
);
}
export default Blog;