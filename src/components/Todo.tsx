import React from 'react';
import { type Todo as TodoType } from '../types'


interface Props extends TodoType {
    onToggleCompleteTodo: (id: string, completed: boolean) => void;
    onRemoveTodo: (id: string) => void;
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
    
    
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteTodo(id, event.target.checked)
    }
    
    
    return (
        <div className='views'>
            <input 
                className="toggle"
                checked={completed}
                type="checkbox" 
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button
                className='destroy'
                onClick={() => {
                    onRemoveTodo(id)
                }}>
            </button>
        </div>
    )
}