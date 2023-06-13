import React, { FC, createContext, useState, useCallback } from 'react';
import { TodoItem } from './interfaces/todoItem.interface'
import { TodoItemsProviderProps, TodoContextProps } from './props'
import { TodoFilter } from './enums/todoFilter.enum'

export const TodoContext = createContext<TodoContextProps>({
  items: [],
  activeFilter: TodoFilter.ALL,
  addItem: () => {},
  deleteItem: () => {},
  editItem: () => {},
  clearCompleted: () => {},
  setActiveFilter: () => {},
});

export const TodoProvider: FC<TodoItemsProviderProps> = ({ children }) => {
  const [items, setItems] = useState<TodoItem[] | []>([]);
  const [activeFilter, setActiveFilter] = useState<TodoFilter>(TodoFilter.ALL);

  const addItem = (newItem: TodoItem): void => {
    setItems([...items, newItem])
  }

  const deleteItem = (itemId: string): void => {
    setItems(items.filter(({id}) => id !== itemId))
  }

  const editItem = useCallback((updatedItem: TodoItem): void => {
    setItems(items.map((item) => {
      if(item.id === updatedItem.id) {
        return { ...item, ...updatedItem }
      }

      return item
    }))
  }, [items])

  const clearCompleted = (): void => {
    setItems(items.filter(({isCompleted}) => !isCompleted))
  }

  return (
    <TodoContext.Provider 
      value={{ 
        items, 
        activeFilter, 
        setActiveFilter, 
        addItem, 
        deleteItem, 
        editItem, 
        clearCompleted 
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};