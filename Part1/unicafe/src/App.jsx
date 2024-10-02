import { useState } from 'react'

const Display = ({text}) => <div><h2><b>{text}</b></h2></div>
  
const Button = ({onClick,text}) =>  <button onClick={onClick}>{text}</button>

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
  return <div><p>Positive {100*(good/total)}%</p></div>
}

const StatisticLine = ({text,value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good,bad,neutral,total,average}) => {
  if (total===0){
    return <div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    
    </div>
  }
  return <div>
    <h2>statistics</h2>
    <table>
      <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="total" value={total}/>
      <StatisticLine text="average" value={average/total}/>
      <StatisticLine text="positive" value={(good/total)*100+"%"} />
      </tbody>
    </table>
  </div>

  

}

//------------------------------------------------------------------------------------------------
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

  
  return (
    <div>
      <Display text = "give feedback"/> 
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/> 
      <Statistics average={average} bad={bad} good={good} neutral={neutral} total={total}/>
      
    </div>  
  )
}

export default App