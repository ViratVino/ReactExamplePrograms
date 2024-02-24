import axios from "axios";

let BaseUrl="http://localhost:5000";


let AxiosInstances=axios.create({
    baseURL:BaseUrl
})


export default AxiosInstances;