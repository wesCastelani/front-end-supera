import axios from "axios";

const baseURL = "http://localhost:8080/transferencias/";

async function getTrasacoesPorConta(id) {
  const res = await axios.get(baseURL + id);
  const data = res.data;
  return data;
}

async function filtrarTransacoes(id, Object) {
  const filtro = {
    inicio: Object.inicio,
    fim: Object.fim,
    nomeOperador: Object.nomeOperador,
  };

  if (filtro.inicio == "" && filtro.fim == "" && filtro.nomeOperador == "") {
    const res = await axios.get(baseURL + id);
    const data = res.data;
    console.log(data);
    return data;
  } else if (
    filtro.inicio == "" &&
    filtro.fim == "" &&
    filtro.nomeOperador != ""
  ) {
    const res = await axios.post(baseURL + id + "/operador", filtro);
    const data = res.data;
    return data;
  } else if (
    filtro.inicio != "" &&
    filtro.fim != "" &&
    filtro.nomeOperador == ""
  ) {
    const res = await axios.post(baseURL + id + "/periodo", filtro);
    const data = res.data;
    return data;
  } else {
    const res = await axios.post(baseURL + id + "/periodo/operador", filtro);
    const data = res.data;
    return data;
  }
}

export { getTrasacoesPorConta, filtrarTransacoes };
