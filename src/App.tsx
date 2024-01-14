import { useState } from "react"
import { Todos } from "./components/Todos"

const mockTodos = [
  {
    id: 1,
    title: 'Learn React',
    completed: true
  },
  {
    id: 2,
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: 3,
    title: 'Learn GraphQL',
    completed: false
  }
]

//This function returns a JSX element
const App = (): JSX.Element => { 
  const [todos] = useState(mockTodos)

  return (
    <Todos todos={todos} />
  )
}

export default App
