import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/todo/Todo'

function App() {
  const [count, setCount] = useState([])


  useEffect ( () => {


    fetch ('https://jsonplaceholder.typicode.com/todos')
    .then ( response => response.json())
    .then (data => setCount(data))



  }, [])




  return (
    <div className="App space-y-10">

      <h1>Total Todo - <span className='text-error'>{count.length}</span></h1>
     



     <div className='grid lg:grid-cols-3 gap-5'>



     {

count.map ( (count) => <Todo title = {count.title}
isdone = {count.completed}

key = {count.id}

></Todo>)






}
     </div>


    </div>
  )
}

export default App
