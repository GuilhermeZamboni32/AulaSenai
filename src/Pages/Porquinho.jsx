
import React, { useState } from 'react'

function Porquinho() {
    const [inputpreco, setInputpreco] = useState('')
    const [input1real, setInput1real] = useState('')
    const [input50cent, setInput50cent] = useState('')
    const [input25cent, setInput25cent] = useState('')
    const [input10cent, setInput10cent] = useState('')
    const [input5cent, setInput5cent] = useState('')
    const [sobrou, setSobrou] = useState(false)
    const [faltou, setFaltou] = useState(false)


    function quebrarporco(){
        let dinheiro = number(input1real) 
        +input50cent * 0.5 + 
        input25cent * 0.25 + 
        input10cent * 0.1 + 
        input5cent * 0.05

        if(dinheiro >= inputpreco){
            setSobrou(true)
            setFaltou(false)
        }else{
            setFaltou(true)
            setSobrou(false)
        }

    }

  return (
    <div>
        <h1>5.25</h1>
        <p>5.25 - O porco: Faça um programa que leia o valor de um produto X e leia a 
            quantidade de moedas de um cofrinho que contenha: 
             N moedas de 1 real; 
             N moedas de 50 centavos; 
             N moedas de 25 centavos; 
             N moedas de 10 centavos; 
             N moedas de 5 centavos; 
            O programa deverá verificar se o total de reais que contem no cofrinho é 
            o bastante para compra o produto X.</p>

                <div className='inpur-container'>
                    <label htmlFor="inputPreco">Preço</label>
                    <input type="number" id='inputPreco' 
                    value={inputpreco}
                    onChange={(event) => setInputpreco(e.target.value)}
                    />
                </div>

        <div className='form-container'>

                <div className='input-container'>
                    <label htmlFor="input50cent">R$0,50</label>
                    <input type="number" id='input50cent' 
                    value={input50cent}
                    onChange={(event) => setInputpreco(e.target.value)}/>
                </div>

                <div className='input-container'>
                    <label htmlFor="input25cent">R$0,25</label>
                    <input type="number" id='input25cent' 
                    value={input25cent}
                    onChange={(event) => setInputpreco(e.target.value)}/>
                </div>

                <div className='input-container'>
                    <label htmlFor="input10cent">R$0,10</label>
                    <input type="number" id='input10cent' 
                    value={input10cent}
                    onChange={(event) => setInputpreco(e.target.value)}/>
                </div>

                <div className='input-container'>
                    <label htmlFor="input5cent">R$0,5</label>
                    <input type="number" id='input5cent' 
                    value={input5cent}
                    onChange={(event) => setInputpreco(e.target.value)}/>
                </div>
        </div>
        <button onClick={quebrarporco}>Quebrar o Porquinho</button>
        {sobrou && <TemDinheiro />}
        {faltou && <FaltaDinheiro />}
      
    </div>
  )
}

export default Porquinho
