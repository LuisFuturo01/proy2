import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

const Inicio=() => {
  return (
  <>
      <h1>Inicio</h1>
        <div className="cuerpo">
        hola
        </div>  
  </>
    
  )
}

const Pagina1=() => {
  return (
  <>
      <h1>Pagina 1</h1>
        <div className="cuerpo1">
        
        </div>  
  </>
  )
}

const Pagina2=() => {
  return (
  <>
      <h1>Pagina 2</h1>
        <div className="cuerpo2">
        
        </div>  
  </>
  )
}

function App() {

  return (
    <>
      <div className="padre">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/pagina1">Pagina1</Link></li>
          <li><Link to="/pagina2">Pagina2</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/pagina1" element={<Pagina1 />}></Route>
          <Route path="/pagina2" element={<Pagina2 />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
