import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [news, setNews] = useState([]);
  const [quesry, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const[loading, setLoading] = useState(false);

  return (
    <> 
      News app
    </>
  )
}

export default App
