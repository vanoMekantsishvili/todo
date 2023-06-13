import React, { FC, useContext, useState } from 'react'
import classnames from 'classnames'
import Button from '../../../components/Button'
import { TodoContext, TodoFilter } from '../../../contexts/TodoContext'
import { FooterProps } from './props'
import './styles.scss'

const Footer: FC<FooterProps> = ({activeTasksAmount}) => {    
    const { activeFilter, clearCompleted, setActiveFilter } = useContext(TodoContext);
    
    return (
        <div className='todo-list-footer'>
            <span className='todo-list-footer__amount'>
                {activeTasksAmount} items left
            </span>

            <Button 
                className={classnames(
                    'todo-list-footer__action', 
                    activeFilter === TodoFilter.ALL && 'todo-list-footer__action--active'
                )} 
                onClick={() => setActiveFilter(TodoFilter.ALL)}
            >
                All
            </Button>
            <Button 
                className={classnames(
                    'todo-list-footer__action', 
                    activeFilter === TodoFilter.ACTIVE && 'todo-list-footer__action--active'
                )}
                onClick={() => setActiveFilter(TodoFilter.ACTIVE)}
            >
                Active
            </Button>
            <Button 
                className={classnames(
                    'todo-list-footer__action', 
                    activeFilter === TodoFilter.COMPLETED && 'todo-list-footer__action--active'
                )}
                onClick={() => setActiveFilter(TodoFilter.COMPLETED)}
            >
                Completed
            </Button>
            <Button className='todo-list-footer__action' onClick={clearCompleted}>
                Clear completed
            </Button>
        </div>
    )
}


export default Footer
