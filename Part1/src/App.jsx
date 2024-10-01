
import { useState } from 'react'

const Display = ({text}) => <div><p><b>{text}</b></p></div>
  
const Button = ({onClick,text}) =>  <button onClick={onClick}>{text}</button>





const App = () => {
  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad]= useState(0)

  const handleGoodClick = () => setGood(good+1) + neutral + bad
  const handleNeutralClick = () => setNeutral(neutral+1) 
  const handleBadClick = () => setBad(bad+1) 

  return (
    <div>
      <Display text = "give feedback"/> 
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/> 
      <Display text = "statistics" />
      <p><b>good </b>{good}</p>
      <p><b>neutral </b>{neutral}</p>
      <p><b>bad </b>{bad}</p>
    </div>
  )
}

export default App