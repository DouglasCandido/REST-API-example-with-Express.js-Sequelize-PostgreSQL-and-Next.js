import useSWR from 'swr';
import Link from 'next/link'

async function Fetcher(url) {

  const res = await fetch(url);

  const json = await res.json();
  
  return json;

}

export default function Carros() {

    const {data, error} = useSWR(`http://localhost:8080/api/cars`, Fetcher);

    console.log(data);

    return (

            <div>

              <center> <h1> <strong> Exibir os dados dos carros que estão cadastrados no sistema </strong> </h1> </center>

              <ul>

                { 
                
                  data ? 
                    
                    data.map((c) => 
                      
                      <li key={c.chassi}> Número do chassi: {c.chassi} <br /> Modelo: {c.model} <br /> Cor: {c.color} </li> 

                    )
      
                    : <p> Nenhum carro ainda foi cadastrado no sistema. </p>

                }

              </ul>

              <center> <h1> <strong> Cadastrar um novo carro </strong> </h1> </center>

              <center>

                <Link href="/create">
                  <a>Ir para a página Create Car</a>
                </Link>

              </center>

              <br />

              <center> <h1> <strong> Alterar os dados de um carro que já está cadastrado </strong> </h1> </center>

              <center>

                <Link href="/update">
                    <a>Ir para a página Update Car</a>
                </Link>
              
              </center>

              <br />

              <center> <h1> <strong> Excluir os dados de um carro que já está cadastrado </strong> </h1> </center>

              <center>

                <Link href="/delete">
                    <a>Ir para a página Delete Car</a>
                </Link>

              </center>

              <br />

              <center> <h1> <strong> Pesquisar os dados de carros que já estão cadastrados </strong> </h1> </center>

              <center>

                <Link href="/search">
                    <a>Ir para a página Search Car</a>
                </Link>

              </center>

              <br />
 
            </div>

    )

}





