import React from 'react'
import { Toaster } from 'react-hot-toast'
import Password_Maker from './components/Password_Maker'

const App = () => {
  return (
    <div>
      <Toaster
  position="top-right"
  reverseOrder={true}
/>
<Password_Maker
/>
    </div>
  )
}

export default App
