import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className='header'>
      <h1>To-doApp 🐈 
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}