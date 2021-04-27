import { useState } from 'react'
import useSWR from 'swr'

export default function Carros() {

    const [carros, setCarros]= useState('resgate')
    const {data, error} = useSWR(`http://localhost:8080/api/cars`, Fetcher)

    console.log(data)

    return (

        <div>
            <div>
              
              {data ? <div> {data.map((c) => <div>{c.chassi} <br /> {c.model} <br /> {c.color} </div> )} </div>  : <p> Não foram encontrados carros. </p>}
                      
            </div>
            
        </div>

    )

}

async function Fetcher(url) {

    const res = await fetch(url)

    const json = await res.json()
    
    return json

}

