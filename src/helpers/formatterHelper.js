function dataFormatter(dataTransferencia) {
  const date = new Date(dataTransferencia);

  return new Intl.DateTimeFormat("pt-BR").format(date);
}

function valoresFormatter(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export { dataFormatter, valoresFormatter };
