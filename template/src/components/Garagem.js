import Carro from "./Carro";

function Garagem() {
  return (
    <div>
      <h1>Garagem da Camila(Está no componente Garagem, chamado no APP pela tag Garagem)</h1>
      <Carro />
      <Carro />
      <Carro />
      <Carro />
    </div>
  );
}

export default Garagem;
