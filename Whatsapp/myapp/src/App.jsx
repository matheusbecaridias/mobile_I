import { useState } from 'react'
import './App.css'
import Titulo from './Componets/Titulo'
import Contatos from './Componets/Contatos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
      <Titulo />
      <Contatos />
      <>Whatsapp</> 

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}



export default App
