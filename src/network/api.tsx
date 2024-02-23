import axios from "axios";

var api = axios.create();
api.defaults.baseURL = 'http://172.16.3.178:5432';
api.defaults.headers.common['Content-Type'] = 'application/json';


export default api;