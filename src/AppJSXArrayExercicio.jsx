import React from "react";

const App = () => {
  const liColors = {
    listStyle: "none",
    listStyle: "none",
    listStyle: "none",
    listStyle: "none",
  };
  // Organize os produtos como mostrado no vídeo
  // Mostre apenas produtos que forem mais caros que R$ 1500
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  console.log(produtos);
  return (
    <section>
      {produtos
        .filter(({ preco }) => +preco.replace("R$ ", "") > 1500)
        .map(({ nome, preco, cores }) => (
          <>
            <h1>{nome}</h1>

            <p>Preço: {preco}</p>

            <ul>
              {cores.map((cor) => (
                <li style={{ backgroundColor: cor }} key="{cor}">
                  {cor}
                </li>
              ))}
            </ul>
          </>
        ))}
    </section>
  );
};

export default App;
