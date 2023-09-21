// npm install axios http://localhost:8080/doaram/v1/ngo/signup
import axios from "axios";  
export default axios.create({
  baseURL: window.mt_backend_url+"/doaram/v1/ngo",
  headers: {
    "Content-Type": "multipart/form-data",
    'Accept': 'application/json',
  }
});