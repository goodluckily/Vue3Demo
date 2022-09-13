import axios from 'axios';
import { ref } from 'vue';
const loginjson = ref('/json')
export const getLogin =()=>{
    return axios.get(loginjson.value + "/login.jsom");
}