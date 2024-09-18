import { useState } from 'react'
import './App.css'
import ArCondicionado from './Pages/ArCondicionado'
import Porquinho from './Pages/Porquinho'
import Comerciante from './Pages/Comerciante'

function App() {
 const [pagina, setPagina] = useState('')

  return (
    <>
      <nav>
        <button onClick={() => setPagina(<ArCondicionado />)}>5.27</button>
        <button onClick={() => setPagina(<Porquinho />)}>5.25</button>
        <button onClick={() => setPagina(<Comerciante />)}>5.23</button>
        <button onClick={() => setPagina(<PesquisaAltura />)}>7.10</button>

      </nav>
      { pagina }
    </>
  )
}

export default App
