import { useState } from "react"


const Header = ({course}) => <h2>{course.name}</h2>

const Part = ({name,exercises}) => {
  return (
    <div>
      {name} {exercises}
    </div>
  )

}

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map(part => <Part key={part.id} name ={part.name} exercises={part.exercises}/>)}
    </div>

  )
}

const Sum = ({course}) => {
  return ( // Added return statement
    <div>
      <b>total of  {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
    </div>
  )
}

const Course = ({course}) =>{
  return(
    <div>
      {course.map(c =>  
        <div key={c.id}> {/* Moved key prop here */}
          <Header course={c} />
          <Content course={c} />
          <Sum course={c}/>
        </div>
      )}
    </div>
  )
}
export default Course
