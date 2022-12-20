import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as api from '../api/apiService'

const Home = () => {

  const params = useParams();

  const [transacoes, setTrasacoes] = useState([])
  const [saldoTotal, setSaldoTotal] = useState([])

  useEffect(() => {
    const getTransactions = async () => {
      let t = await api.getTrasacoesPorConta(params.id);
      setTimeout(()=>{
        setTrasacoes(t.transferencias)
        setSaldoTotal(t.saldo)
      }, 1000)
      console.log(saldoTotal)
    };
    getTransactions();
  }, [saldoTotal]);


  return (
    <div className="App">
      <h2>Seu saldo é: {saldoTotal}</h2>
    </div>
  );
}

export default Home;
