import Link from 'next/link'

export default function createCar() {

    const updateCar = async event => {

      event.preventDefault()
  
      const res = await fetch('http://localhost:8080/api/cars/update', {
        body: JSON.stringify({
          chassi: event.target.chassi.value,
          model: event.target.model.value,
          color: event.target.color.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      })
  
      const result = await res.json()
 
    }
  
    return (

        <div>

            <center>

                <h1> <strong> Alterar um carro </strong> </h1>

                <form onSubmit={updateCar}>
                    <label htmlFor="chassi">Número do chassi</label> &nbsp;
                    <input id="chassi" name="chassi" type="text" autoComplete="chassi" required /> &nbsp; &nbsp; &nbsp;
                    <label htmlFor="model">Modelo</label> &nbsp;
                    <input id="model" name="model" type="text" autoComplete="model" required /> &nbsp; &nbsp; &nbsp;
                    <label htmlFor="color">Cor</label> &nbsp;
                    <input id="color" name="color" type="text" autoComplete="color" required /> &nbsp; &nbsp; &nbsp;
                    <button type="submit">Alterar carro</button> 
                </form>

            </center>

            <br />
        
            <Link href="/">
                <a>Voltar para a página Inicial</a>
            </Link>
        
        </div>
    
    )

}

