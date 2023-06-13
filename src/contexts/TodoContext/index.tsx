import React, { FC, createContext, useState, ReactNode, useCallback, useMemo } from 'react';

export interface TodoItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

export enum TodoFilter {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

interface TodoContextProps {
  items: TodoItem[] | [];
  activeFilter: TodoFilter;
  addItem: (item: TodoItem) => void;
  deleteItem: (itemId: string) => void;
  editItem: (item: TodoItem) => void;
  clearCompleted: () => void;
  setActiveFilter: (activeFilter: TodoFilter) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  items: [],
  activeFilter: TodoFilter.ALL,
  addItem: () => {},
  deleteItem: () => {},
  editItem: () => {},
  clearCompleted: () => {},
  setActiveFilter: () => {},
});


interface TodoItemsProviderProps {
  children: ReactNode;
}

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