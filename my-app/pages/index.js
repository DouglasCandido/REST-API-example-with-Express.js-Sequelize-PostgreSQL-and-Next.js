import useSWR from 'swr';

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

                Número do chassi: <input type="text" name="chassi"></input> &nbsp;

                Modelo: <input type="text" name="model"></input> &nbsp;

                Cor: <input type="text" name="color"></input> &nbsp;

                <input type="submit"></input> &nbsp;

              </center>

              <br />

              <center> <h1> <strong> Alterar os dados de um carro que já está cadastrado </strong> </h1> </center>

              <center>

                Número do chassi: <input type="text" name="chassi"></input> &nbsp;

                Modelo: <input type="text" name="model"></input> &nbsp;

                Cor: <input type="text" name="color"></input> &nbsp;

                <input type="submit"></input> &nbsp;
              
              </center>

              <br />

              <center> <h1> <strong> Excluir os dados de um carro que já está cadastrado </strong> </h1> </center>

              <center>

              Número do chassi: <input type="text" name="chassi"></input> &nbsp;

              <input type="submit"></input> &nbsp;

              </center>

              <br />
 
            </div>

    )

}




