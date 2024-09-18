
import { useState } from "react"
import './ArCondicionado.css'


function ArCondicionado() {

  const [inputCelsius, setInputCelsius] =  useState('')
  const [inputFahrenheit, setInputFahrenheit] =  useState('')

  function mudouCelsius(event){
    setInputCelsius(event.target.value)
    let f = event.target.value * 1.8 + 32
    setInputFahrenheit(f.toFixed(2))

  }

  function mudouFahrenheit(event){
    setInputFahrenheit(event.target.value)
    let c = (event.target.value - 32) / 1.8
    setInputCelsius(c.toFixed(1))

  }


  return (
    <div>
      <h1>5.27</h1>
      <p>Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer 
        converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, 
        faça uma leitura e converta para a unidade escolhida.</p>


         <div className="form-container">
            <div className="input-container">
              <label htmlFor="inpC">Celsius</label>
              <input type="number" id='inpC'
              value={inputCelsius}
              onChange={ mudouCelsius}
            />
          </div>
            <div>

             

            </div> 
          <div className="input-container">
              <label htmlFor="inpF">Fahrenheit</label>
              <input type="number" id='inpF'
              value={inputFahrenheit}
              onChange={mudouFahrenheit}
            />
          </div>
        </div>

       

    </div>
  )
}

export default ArCondicionado
