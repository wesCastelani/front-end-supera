import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as api from "../api/apiService";

import * as format from "../helpers/formatterHelper";

const Home = () => {
  const params = useParams();

  const [transacoes, setTrasacoes] = useState([]);
  const [saldoTotal, setSaldoTotal] = useState([]);
  const [saldoTotalFiltrado, setSaldoTotalFiltrado] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      let t = await api.getTrasacoesPorConta(params.id);
      setTrasacoes(t.transferencias);
      setSaldoTotal(t.saldo);
    };
    getTransactions();
  }, [saldoTotal]);

  const formSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries());
    console.log(formObject);
    const getTransactions = async () => {
      let t = await api.filtrarTransacoes(params.id, formObject);
      setTrasacoes(t.transferencias);
      setSaldoTotalFiltrado(t.saldo);
    };

    getTransactions();
  };

  return (
    <div className="container">
      <form
        onSubmit={formSubmit}
        className="d-flex flex-row align-items-center flex-wrap mt-5"
      >
        <label className="my-1 me-2">Data Inicio</label>
        <input
          type="date"
          name="inicio"
          className="form-control my-1 me-sm-2 w-auto"
        />
        <label className="my-1 me-2">Data fim</label>
        <input
          type="date"
          name="fim"
          className="form-control my-1 me-sm-2 w-auto"
        />
        <label className="my-1 me-2">Nome do operador</label>
        <input
          type="text"
          name="nomeOperador"
          className="form-control my-1 me-sm-2 w-auto"
        />

        <button type="submit" className="btn btn-primary my-1">
          Filtrar
        </button>
      </form>
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">{format.valoresFormatter(saldoTotal)}</th>
            <th scope="col">{format.valoresFormatter(saldoTotalFiltrado)}</th>
          </tr>
        </thead>
      </table>
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Valor</th>
            <th scope="col">Tipo</th>
            <th scope="col">Nome Operador Transacionando</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((trasacao) => (
            <tr>
              <td>{format.dataFormatter(trasacao.dataTransferencia)}</td>
              <td>{format.valoresFormatter(trasacao.valor)}</td>
              <td>{trasacao.tipo}</td>
              <td>{trasacao.nomeOperadorTransacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
