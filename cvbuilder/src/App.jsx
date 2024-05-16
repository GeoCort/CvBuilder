import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ResumeHeader from "./ResumeHeader"

function App() {
  return (
    <div className="bg-slate-500 rounded-lg w-96">
    <ResumeHeader
        firstName="George"
        lastName="Cortes"
        email="cortes.george93@icloud.com"
        phoneNumber="+1-(510)-460-0905" />
    </div>
  )
}

export default App
