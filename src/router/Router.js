import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Careers from '../pages/Careers';
import Cookies from '../pages/Cookies';
import Capabilities from '../pages/Capabilities';
import Contact from '../pages/Contact';
import ContactThanks from '../components/ContactThanks';
import ContactOops from '../components/ContactOops';
import Privacy from '../pages/Privacy';
import Webdev from '../components/case_study/Website_development';
import Ecomm from '../components/case_study/Ecommerce_solution';
import Brand from '../components/case_study/branding';
import Webapp from '../components/case_study/web_application';
import Videoanim from '../components/case_study/video_animation';
import Digit from '../components/case_study/digital_marketing';
import Blog from '../pages/Blog';
import PostDetail from '../pages/PostDetail';
import Admin from '../components/admin/Admin';
import BlogCreate from '../components/admin/BlogCreate';
import BlogUpdate from '../components/admin/BlogUpdate';
import OurWork from '../pages/OurWork';
import PrivacyPolicy from '../pages/Privacypolicy';
import Error from '../pages/Error';
import Portfolio  from '../pages/Portfolio1';
import Faq from '../components/Faq';
import Landingpage from '../components/Landingpage';

function Router(){
return(
    <Routes>
		<Route path='/' element={<Home />} />
		<Route path='/ourwork' element={<OurWork />} />
		<Route path='/faq' element={<Faq />} />
		<Route path='/about' element={<About />} />
		<Route path='/blog' element={<Blog />} />
		<Route path='/privacypolicy' element={<PrivacyPolicy />} />
		<Route path='/Portfolio' element={<Portfolio />} />
		<Route path='/careers' element={<Careers />} />
		<Route path='/cookies' element={<Cookies />} />
		<Route path='*' element={<Error />} />
		<Route path='/capabilities' element={<Capabilities />} />
		<Route path='/contact' element={<Contact />} />
		<Route path='/contactthanks' element={<ContactThanks />} />
		<Route path='/contactoops' element={<ContactOops />} />
		<Route path='/privacy' element={<Privacy />} />
		<Route path='/webdev' element={<Webdev />} />
		<Route path='/ecomm' element={<Ecomm />} />
		<Route path='/brand' element={<Brand />} />
		<Route path='/webapp' element={<Webapp />} />
		<Route path='/videoanim' element={<Videoanim />} />
		<Route path='/digit' element={<Digit />} />
		<Route path='/blog' element={<Blog />} />
		<Route path='/post-detail' element={<PostDetail />} />
		<Route path='/admin' element={<Admin />} />
		<Route path='/blogcreate' element={<BlogCreate />} />
		<Route path='/blogupdate' element={<BlogUpdate />} />
		<Route path='/landingpage' element={<Landingpage />} />
	</Routes>
	);
}
export default Router;