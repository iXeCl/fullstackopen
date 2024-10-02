import { useState } from 'react'



const Button = ({text,onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])

  const randomClick = () => setSelected(Math.floor(Math.random()*(anecdotes.length-1)))
  const voteClick = () => {
    console.log(points)
    const newPoints = [...points] // Create a copy of the points array
    newPoints[selected] += 1 // Increment the vote for the selected anecdote
    setPoints(newPoints) // Update the state with the new array
    console.log(newPoints)
  }
  const MostVotes = () => {
    console.log(Math.max(...points))
    if (Math.max(...points)===0){
      return <div></div>

    }
  
    return ( <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
      <p>This anecdote has {Math.max(...points)} votes</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} points</p>
      <Button onClick={voteClick} text="vote" />
      <Button onClick={randomClick}  text="next anecdote" />
      <MostVotes/>
    </div>
  )

}
export default App