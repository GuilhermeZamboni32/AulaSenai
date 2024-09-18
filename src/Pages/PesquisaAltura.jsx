
import React, { useState } from "react"

function PesquisaAltura() {
  const [pessoas, setPessoas] = useState(
    Array(10).fill({ altura: 0, genero: 0 })
  )

  const handleChange = (index, field, value) => {
    const updatedPessoas = [...pessoas];
    updatedPessoas[index][field] = parseFloat(value);
    setPessoas(updatedPessoas);
  }

  const calcular = () => {
    let maiorAltura = 0
    let menorAltura = Infinity
    let totalAlturaMulheres = 0
    let totalMulheres = 0
    let totalAlturaPopulacao = 0
    let totalHomens = 0

    
    pessoas.forEach((pessoa) => {
      const { altura, genero } = pessoa

      
      if (altura > maiorAltura) maiorAltura = altura
      if (altura < menorAltura) menorAltura = altura

      
      if (genero === 1) {
        totalAlturaMulheres += altura
        totalMulheres++
      }

      
      totalAlturaPopulacao += altura

      
      if (genero === 0) totalHomens++
    });

    
    const mediaMulheres = totalMulheres > 0 ? totalAlturaMulheres / totalMulheres : 0
    const mediaPopulacao = totalAlturaPopulacao / pessoas.length

    
    const percentualHomens = (totalHomens / pessoas.length) * 100

    return {
      maiorAltura,
      menorAltura,
      mediaMulheres,
      mediaPopulacao,
      percentualHomens,
    };
  };

  const { maiorAltura, menorAltura, mediaMulheres, mediaPopulacao, percentualHomens } =
    calcular()

  return (
    <div>
      <h1>7.10</h1>
      <p>Foi feita um a pesquisa entre os habitantes de um a região e 
        coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça 
        um programa que leia os dados de 10 pessoas e informe: 
        a maior e a menor altura encontrada; 
        a média de altura das mulheres; 
        a média de altura da população; 
        o percentual de homens na população.</p>
      {pessoas.map((pessoa, index) => (
        <div key={index}>
          <h3>Pessoa {index + 1}</h3>
          <label>
            Altura:
            <input
              type="number"
              value={pessoa.altura}
              onChange={(event) => handleChange(index, "altura", e.target.value)}
            />
          </label>
          <label>
            Gênero (0 = masc, 1 = fem):
            <input
              type="number"
              value={pessoa.genero}
              onChange={(event) => handleChange(index, "genero", e.target.value)}
            />
          </label>
        </div>
      ))}

      <h2>Resultados:</h2>
      <p>Maior altura: {maiorAltura.toFixed(2)}m</p>
      <p>Menor altura: {menorAltura.toFixed(2)}m</p>
      <p>Média de altura das mulheres: {mediaMulheres.toFixed(2)}m</p>
      <p>Média de altura da população: {mediaPopulacao.toFixed(2)}m</p>
      <p>Percentual de homens: {percentualHomens.toFixed(2)}%</p>
    </div>
  );
}

export default PesquisaAltura;
