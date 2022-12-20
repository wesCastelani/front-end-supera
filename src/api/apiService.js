import axios from "axios";

const baseURL = 'http://localhost:8080/transferencias/'



async function getTrasacoesPorConta(id){
    const res = await axios.get(baseURL + id)
    const data = res.data
    return data
}


export {getTrasacoesPorConta}