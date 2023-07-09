import { API_URL } from "../constants";
import axios from "axios";

export default function getPicture(name){
    
    const url = API_URL + `/${name}`
     
    return axios.get(url)
}