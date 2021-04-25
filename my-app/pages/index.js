import Link from 'next/link'

function HomePage() {

  return (

    <div>

      <center> <h1> <strong> Bem vindo(a) ao Cars Promoter, este app foi criado com o objetivo de promover e exibir modelos de carros. </strong> </h1> </center>

      <center> <h2> Página Inicial </h2> </center>

      <Link href="/create">
        <a>Ir para a página Cadastrar Carros</a>
      </Link>

      <br />

      <Link href="/read">
        <a>Ir para a página Exibir Carros</a>
      </Link>

      <br />

      <Link href="/update">
        <a>Ir para a página Alterar Carros</a>  
      </Link>

      <br />

      <Link href="delete">
        <a>Ir para a página Excluir Carros</a>
      </Link>

      <br />

    </div>
  
  );

}

export default HomePage

