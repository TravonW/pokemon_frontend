import { API_URL } from "../constants";
import axios from "axios";
export default function getData(){
    const url = API_URL + '/all-pokemon'

    return axios.get(url)

}