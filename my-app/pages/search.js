import Link from 'next/link'

export default function findCar() {

    const searchCar = async event => {

      event.preventDefault()
  
      const res = await fetch('http://localhost:8080/api/cars/bymodel', {
        body: JSON.stringify({
          model: event.target.model.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
  
      const result = await res.json()

      alert(JSON.stringify(result, null, 2))
 
    }
  
    return (

        <div>

            <center>

                <h1> <strong> Procurar carros por modelo </strong> </h1>

                <form onSubmit={searchCar}>
                    <label htmlFor="model">Modelo</label> &nbsp;
                    <input id="model" name="model" type="text" autoComplete="model" required /> &nbsp; &nbsp; &nbsp;
                    <button type="submit">Procurar carros</button> 
                </form>

            </center>

            <br />
        
            <Link href="/">
                <a>Voltar para a página Inicial</a>
            </Link>
        
        </div>
    
    )

}

