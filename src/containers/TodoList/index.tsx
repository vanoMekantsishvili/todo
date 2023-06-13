import React, { FC, useCallback, useContext, useMemo } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Item from './Item'
import AddItem from './AddItem'
import { TodoContext, TodoFilter } from '../../contexts/TodoContext'
import Footer from './Footer'
import './styles.scss'

const TodoList: FC = () => {
    const { items, activeFilter } = useContext(TodoContext);

    
    const filteredItems = useMemo(() => {
        switch(activeFilter) {
          case TodoFilter.ALL: 
            return items;
          case TodoFilter.ACTIVE:
            return items.filter(({isCompleted}) => !isCompleted)
          case TodoFilter.COMPLETED:
            return items.filter(({isCompleted}) => isCompleted)
          default:
            return items
        }
      }, [activeFilter, items])

    const emptyStateCopy = useMemo(() => {
        switch(activeFilter) {
            case TodoFilter.ALL: 
              return 'No items added yet.';
            case TodoFilter.ACTIVE:
              return "No more active tasks.'"
            case TodoFilter.COMPLETED:
              return "All tasks are completed"
            default:
              return 'No items added yet.';
          }
    }, [activeFilter])

    const activeItemsAmount = useMemo<number>(() => {
        if(!items.length) {
          return 0;
        }
    
        return items.filter((item) => !item.isCompleted).length
    }, [items])

    return (
        <div className='todo-list-wrapper'>
            <AddItem />
            
            <div className='todo-list-wrapper__items-container'>
                {filteredItems.length > 0 
                ? (
                    <div className='todo-list-wrapper__todo-items'>
                    {
                        filteredItems.map((item) => (
                            <Item
                                key={item.id}
                                item={item}
                            />
                        ))
                    }
                    
                </div>
                ) : (
                    <div className='todo-list-wrapper__no-result'>
                        {emptyStateCopy}
                    </div>
                )}
                
            </div>
            
            <Footer activeTasksAmount={activeItemsAmount}/>
        </div>
    )
}


export default TodoList
