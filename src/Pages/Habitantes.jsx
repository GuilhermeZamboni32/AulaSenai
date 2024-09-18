
import React, { useState } from "react"

function Habitantes() {
  const [pessoas, setPessoas] = useState([
    { altura: 0, genero: 0 },
    { altura: 0, genero: 0 },
    { altura: 0, genero: 0 },
    { altura: 0, genero: 0 },
    { altura: 0, genero: 0 },
    { altura: 0, genero: 0 },
    { altura: 0, genero: 0 },
    { altura: 0, genero: 0 },
    { altura: 0, genero: 0 },
    { altura: 0, genero: 0 },
  ])

  const handleChange = (index, field, value) => {
    const updatedPessoas = [...pessoas]
    updatedPessoas[index][field] = parseFloat(value)
    setPessoas(updatedPessoas)
  };

  function calcular(){
    
    const alturas = pessoas.map((pessoa) => pessoa.altura)

    const maiorAltura = Math.max(...alturas)
    const menorAltura = Math.min(...alturas)

    
    const mulheres = pessoas.filter((pessoa) => pessoa.genero === 1)
    const mediaMulheres =
      mulheres.length > 0
        ? mulheres.reduce((acc, pessoa) => acc + pessoa.altura, 0) /
          mulheres.length
        : 0

    
    const mediaPopulacao =
      pessoas.reduce((acc, pessoa) => acc + pessoa.altura, 0) / pessoas.length;

    
    const homens = pessoas.filter((pessoa) => pessoa.genero === 0)
    const percentualHomens = (homens.length / pessoas.length) * 100

    return {
      maiorAltura,
      menorAltura,
      mediaMulheres,
      mediaPopulacao,
      percentualHomens,
    }
  }

  const { maiorAltura, menorAltura, mediaMulheres, mediaPopulacao, percentualHomens } = calcular()

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

      <h3>Resultados:</h3>
      <p>Maior altura: {maiorAltura.toFixed(2)}m</p>
      <p>Menor altura: {menorAltura.toFixed(2)}m</p>
      <p>Média de altura das mulheres: {mediaMulheres.toFixed(2)}m</p>
      <p>Média de altura da população: {mediaPopulacao.toFixed(2)}m</p>
      <p>Percentual de homens: {percentualHomens.toFixed(2)}%</p>
    </div>
  )
}

export default Habitantes;
