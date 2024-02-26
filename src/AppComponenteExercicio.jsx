import React from "react";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>

      <h1 style={{ color: "green", textTransform: "capitalize" }}>
        {window.location.pathname == "/"
          ? "Home"
          : window.location.pathname.replace("/", "")}
      </h1>
    </header>
  );
};

const Home = () => {
  return <p>Essa é a Home</p>;
};

const Produtos = () => {
  // Replique a interface como a apresentada na aula
  // Utilize a array abaixo para mostrar os produtos
  // Quebre em componentes o que precisar ser reutilizado
  // Dica: const { pathname } = window.location; (puxa o caminho do URL)
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <>
      {produtos.map((produto) => (
        <div key={produto.nome}>
          <p>{produto.nome}</p>

          <ul>
            {produto.propriedades.map((prop) => (
              <li key={prop}>{prop}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

const App = () => {
  const { pathname } = window.location;

  let Page;

  if (pathname == "/") {
    Page = Home;
  }
  if (pathname == "/produtos") {
    Page = Produtos;
  }

  return (
    <>
      <Header />

      <Page />
    </>
  );
};

export default App;
