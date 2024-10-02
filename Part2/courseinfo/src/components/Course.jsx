import { useState } from "react"


const Header = ({course}) => <h1>{course.name}</h1>

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
      
      </div>

  )
}


const Course = ({course}) =>{
  return(
    <div>
      <Header course={course} />
      <Content course={course}/>


    </div>



  )
}
export default Course