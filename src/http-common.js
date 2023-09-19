// npm install axios test
import axios from "axios"; 
export default axios.create({
  baseURL:  window.mt_backend_url+"/doaram/v1/ngo",
  headers: { 
    "Content-type": "application/json"
  }
});