import axios from "axios";

export default axios.create({
	//baseURL: "http://localhost:4519/",
	//baseURL: "http://beta.dotoxygen.com:4519/",
	//baseURL: "http://149.102.133.147:3000/",
	//baseURL: 'http://php.dotoxygen.com/',
	// baseURL: 'https://dotoxygen.com/',
	baseURL: 'https://websitedesignzilla.com/',
	
	headers:{
		"content-type": "application/json, multipart/form-data"
	}
});