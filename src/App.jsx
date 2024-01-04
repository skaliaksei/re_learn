import MyComponent from './components/MyComponent'
import Button from './components/Button/Button'
import './App.css'
import { person, cat } from './data'
import { useState } from 'react'

function App() {
  const [content, setContent] = useState('name')

  function handleClick(type) {
    console.log(`${type} clicked`)
    setContent(type)
  }

  return (
    <div>
      <MyComponent name = { person[0].name } age = { person[0].age } />
      <MyComponent { ...person[1] } />

      <Button onClick={ () => handleClick('name') }>Click</Button>
      <Button onClick={ () => handleClick('age') }>Stop</Button>
      <Button onClick={ () => handleClick('Resume') }>Resume</Button>
      <h3>{ cat[content] }</h3>
    </div>
  )
}

export default App
