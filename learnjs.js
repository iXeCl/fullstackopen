
// // // Variables
// // const x = 1
// // let y = 5 

// // console.log(x,y)

// // y+=10
// // console.log(x,y)
// // y='sometext'
// // console.log(x,y)
// // // const sets an immutable variable whereas let declares a mutable variable

// // // Arrays
// // const t= [1,-1,3]
// // console.log(t)
// // t.push(5)

// // console.log(t)
// // console.log(t.length)
// // console.log(t[1])

// // t.forEach(value => 
// //     console.log(value)

// // )

// // const t1=[1,-1,3]
// // const t2=t1.concat(4)
// // console.log(t1)
// // console.log(t2)
// // //maps
// // const m1 = t.map(value=>value*2)
// // console.log(t)
// // console.log(m1)
// // const m2  = t.map(value => '<li>' + value +'<li>')
// // console.log(m2)
// // //destructuring
// // const t3  = [1,2,3,4,5]
// // const [first,second,...rest] = t3
// // console.log(first,second)
// // console.log(rest)

// // //Objects

// // const object1 = {
// //     name: 'Arto Hellas',
// //     age: 35,
// //     education: 'PhD',
// // }

// // const object2 = {
// //     name: 'Full Stack web application development',
// //     level: 'intermediate studies',
// //     size: 5
// // }

// // const object3 = {
// //     name: {
// //         fist: 'Dan',
// //         last: 'Abramov',
// //     },
// //     grades: [2,3,5,3],
// //     department: 'Stanford University',
// // }

// // console.log(object1.name)
// // const fieldName='age'
// // console.log(object1[fieldName])

// // object1.address = ['Helsinki']
// // object1['secret number'] = 12341

// // console.log(object1.address)
// // console.log(object1['secret number'])

// // //using object in array

// // const course = 'Half Stack application development'
// //   const parts = [
// //     {
// //       name: 'Fundamentals of React',
// //       exercises: 10
// //     },
// //     {
// //       name: 'Using props to pass data',
// //       exercises: 7
// //     },
// //     {
// //       name: 'State of a component',
// //       exercises: 14
// //     }
// //   ]
// // console.log(parts[0].name)

// //
// const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
// course.parts.forEach(value => console.log(value.name))
// console.log(course.parts[0].name)

// //This statement

// const arto = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
  
//     greet: function() {
//       console.log('hello, my name is ' + this.name)
//     },
//   }
  
//   arto.greet()  // "hello, my name is Arto Hellas" gets printed
//   arto.growOlder = function() {
//     this.age +=1
//   }
  
//   console.log(arto.age)
//   arto.growOlder()
//   console.log(arto.age)


// const a = [0,0,0,0,0,0,0,0]
// a[2]+=1

// //console.log(a)


// const b =[1, 4, 5, 2, 0, 0, 0, 0]

// console.log(b.indexOf(Math.max(b)))
// console.log(b)
// console.log(...b)

// MAPS on Arrays
// const notes = [
//     {
//       id: 1,
//       content: 'HTML is easy',
//       important: true
//     },
//     {
//       id: 2,
//       content: 'Browser can execute only JavaScript',
//       important: false
//     },
//     {
//       id: 3,
//       content: 'GET and POST are the most important methods of HTTP protocol',
//       important: true
//     }
//   ]
// // console.log(notes[1].content)
// // console.log(notes.map(note=> note.content))

// // const b = [1,2,3,4,5]
// // console.log(b.map(a => a*2))

// const result = notes.map(note => note.id) 
// console.log(typeof result[1])

// const course = {
//     id: 1,
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3
//       }
//     ]
//   }

//   //console.log(course.parts.map(part=>part.name + part.exercises))
//   console.log(course.parts.map(part => part.exercises).reduce((acc, curr) => acc + curr, 0))
//   console.log(course.parts.reduce((sum, part) => sum + part.exercises, 0))

const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const totalExercises = course.map(c => ({
    name: c.name,
    total: c.parts.reduce((sum, part) => sum + part.exercises, 0)
  }))
  
  console.log("Total exercises for each course:", totalExercises)
  
  // b) Finding the max number in the array a
  const a = [1, 2, 3, 4, 5]
  const maxNumber = Math.max(...a)
  
  console.log("Maximum number in array a:", maxNumber)
 const b = course.map(c => c.parts.reduce((sum, part) => sum + part.exercises, 0))
 console.log(b)

 console.log(course.map(c => c.parts))