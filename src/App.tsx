import { useState } from "react"
import { Todos } from "./components/Todos"
import { TODO_FILTERS } from "./consts"
import { FilterValue } from "./types"
import { Footer } from "./components/Footer"
import { Header } from './components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'Learn React',
    completed: true
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Learn GraphQL',
    completed: false
  }
]

//This function returns a JSX element
const App = (): JSX.Element => { 
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL) //<FilterValue> with that, the progam knows that the type of the variable is any of: 'all', 'active' or 'completed'

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (id: string, completed: boolean): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  } 

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = (title: string): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos} 
      />
      <Footer
        activeCount={activeCount}
        completedCount = {completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
