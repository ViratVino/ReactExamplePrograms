import axios from "axios";

let ApiBase_Url="https://api.escuelajs.co/api/v1";

export let User_API_Instance=axios.create({
    baseURL:ApiBase_Url,
})