import { FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
    handleFilterChange: (filter: FilterValue) => void
    activeCount: number
    completedCount: number
    onClearCompleted: () => void
    filterSelected: FilterValue
}

export const Footer: React.FC<Props> = ({ 
    activeCount,
    completedCount,
    onClearCompleted,
    filterSelected,
    handleFilterChange
 }) => {
    return (
        <footer className = 'footer'>
            <span className="todo-count">
                <strong>{activeCount}</strong> Tareas pendientes
            </span>

            <Filters filterSelected={filterSelected} handleFilterChange={handleFilterChange} />
        </footer>
    )
 }