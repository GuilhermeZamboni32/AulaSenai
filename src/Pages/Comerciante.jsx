
import React, { useState } from 'react'

function CalculadoraLucro() {
  const [valorCompra, setValorCompra] = useState(0)
  const [valorVenda, setValorVenda] = useState(0)

  function calcularValorVenda(){
    let lucro

    if (valorCompra < 20) {
      lucro = valorCompra * 0.45
    } else {
      lucro = valorCompra * 0.30
    }

    const valorFinal = valorCompra + lucro
    setValorVenda(valorFinal.toFixed(2))
  };

  return (
    <div>
      <h1>5.23</h1>
      <p>5.23 - Um comerciante comprou um produto e quer vendê-lo com lucro de 
        45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
        será de 30%. Faça um programa que entre com o valor do produto e mostre 
        o valor de venda.</p>
      <label>
        Valor de Compra (R$):
        <input
          type="number"
          value={valorCompra}
          onChange={(e) => setValorCompra(Number(e.target.value))}
        />
      </label>
      <button onClick={calcularValorVenda}>Calcular</button>

      {valorVenda > 0 && (
        <div>
          <h2>Valor de Venda: R${valorVenda}</h2>
        </div>
      )}
    </div>
  );
};

export default CalculadoraLucro
