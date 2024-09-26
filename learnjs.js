
// // Variables
// const x = 1
// let y = 5 

// console.log(x,y)

// y+=10
// console.log(x,y)
// y='sometext'
// console.log(x,y)
// // const sets an immutable variable whereas let declares a mutable variable

// // Arrays
// const t= [1,-1,3]
// console.log(t)
// t.push(5)

// console.log(t)
// console.log(t.length)
// console.log(t[1])

// t.forEach(value => 
//     console.log(value)

// )

// const t1=[1,-1,3]
// const t2=t1.concat(4)
// console.log(t1)
// console.log(t2)
// //maps
// const m1 = t.map(value=>value*2)
// console.log(t)
// console.log(m1)
// const m2  = t.map(value => '<li>' + value +'<li>')
// console.log(m2)
// //destructuring
// const t3  = [1,2,3,4,5]
// const [first,second,...rest] = t3
// console.log(first,second)
// console.log(rest)

// //Objects

// const object1 = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
// }

// const object2 = {
//     name: 'Full Stack web application development',
//     level: 'intermediate studies',
//     size: 5
// }

// const object3 = {
//     name: {
//         fist: 'Dan',
//         last: 'Abramov',
//     },
//     grades: [2,3,5,3],
//     department: 'Stanford University',
// }

// console.log(object1.name)
// const fieldName='age'
// console.log(object1[fieldName])

// object1.address = ['Helsinki']
// object1['secret number'] = 12341

// console.log(object1.address)
// console.log(object1['secret number'])

// //using object in array

// const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
// console.log(parts[0].name)

//
const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
course.parts.forEach(value => console.log(value.name))
console.log(course.parts[0].name)