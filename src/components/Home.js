import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [idConta, setIdConta] = useState(0);

  const handleIdConta = (e) => {
    setIdConta(e.target.value);
  };
  return (
    <div className="container">
      <form className="d-flex flex-row align-items-center flex-wrap mt-5">
        <label className="my-1 me-2">Digite o número da conta: </label>
        <input
          onChange={handleIdConta}
          type="text"
          name="idConta"
          className="form-control my-1 me-sm-2 w-auto"
        />

        <Link
          to={"/conta/" + idConta}
          type="submit"
          className="btn btn-primary my-1"
        >
          Buscar
        </Link>
      </form>
    </div>
  );
};

export default Home;
