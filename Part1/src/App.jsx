import { useState } from 'react'

const Display = ({text}) => <div><p><b>{text}</b></p></div>
  
const Button = ({onClick,text}) =>  <button onClick={onClick}>{text}</button>

const App = () => {
  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad]= useState(0)
  const [average,setAverage] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)  // Update good
    setTotal(total+1)
    setAverage(average+1)
    console.log(average)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1) 
    setTotal(total+1)
    console.log(average)
  }
  const handleBadClick = () => {
    setBad(bad+1)  
    setTotal(total+1)
    setAverage(average-1)
    console.log(average)

  }

  const Average = ({average,total}) => {
    if (average === 0 && total === 0){
      return <div><p>average 0</p></div>
    }
    return <div><p>average {average/total}</p></div>

  } 
  const Positive = ({good,total}) => {
    if (good === 0){
      return <div><p>Positive 0%</p></div>
    }
    return <div><p>Positive {good/total}%</p></div>
  }
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
      <p><b>total </b>{total}</p>
      <Average average={average} total={total}/>
      <Positive good={good} total={total}/>
    </div>  
  )
}

export default App