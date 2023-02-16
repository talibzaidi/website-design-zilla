import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';


function PostDetail(){
const params = useLocation();
const navigate = useNavigate();

function image1(){
  let result3 = params.state.i === null ? params.state.j.image1 : params.state.i.image1;
  return <img src={'./gohaych_images/'+result3} alt='post' className='img-fluid' />;
}

function text1(){
  let result2 = params.state.i === null ? params.state.j.text : params.state.i.text;
  //result2 = result2.replace(/\r\n\r\n/g, '</p><p>').replace(/\n\n/g, '</p><p>');
  //result2 = result2.replace(/\r\n/g, '<br />').replace(/\n/g, '<br />');
  return <div className='text1' dangerouslySetInnerHTML={{ __html: result2 }}></div>;
}

return(
<div>
<section className='post1'>
<div className='container'>
<div className='row'>
<div className='col-md-12'>

<button className='btn7 effect1' onClick={() => navigate(-1)}>Back</button>
<p>{ params.state.i === null ? params.state.j.date : params.state.i.date }</p>
<h3>{params.state.i === null ? params.state.j.heading : params.state.i.heading }</h3>
<p>{ params.state.i === null ? params.state.j.author : params.state.i.author }</p>

<div className='frame'>{image1()}</div>
{text1()}

</div>{/*con*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

</div>
);
}
export default PostDetail;