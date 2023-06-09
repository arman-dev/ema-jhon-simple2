import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/componants/Header/Header'
import Shop from './assets/componants/Shop/Shop'
// deploy site: apathetic-time.surge.sh

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}

export default App
