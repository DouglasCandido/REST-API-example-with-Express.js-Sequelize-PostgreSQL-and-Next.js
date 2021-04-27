import Link from 'next/link'

export default function removeCar() {

    const deleteCar = async event => {

      event.preventDefault()
  
      const res = await fetch('http://localhost:8080/api/cars/delete', {
        body: JSON.stringify({
          chassi: event.target.chassi.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'DELETE'
      })
  
      const result = await res.json()
 
    }
  
    return (

        <div>

            <center>

                <h1> <strong> Deletar um carro </strong> </h1>

                <form onSubmit={deleteCar}>
                    <label htmlFor="chassi">Número do chassi</label> &nbsp;
                    <input id="chassi" name="chassi" type="text" autoComplete="chassi" required /> &nbsp; &nbsp; &nbsp;
                    <button type="submit">Deletar carro</button> 
                </form>

            </center>

            <br />
        
            <Link href="/">
                <a>Voltar para a página Inicial</a>
            </Link>
        
        </div>
    
    )

}

