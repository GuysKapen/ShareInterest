import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="root">
     <p className="text-3xl">
       Hello world
     </p>
    </div>
  )
}

export default App
