import { ReactNode } from "react";
import { TodoItem } from "./interfaces/todoItem.interface";
import { TodoFilter } from "./enums/todoFilter.enum";

export interface TodoItemsProviderProps {
    children: ReactNode;
}

export interface TodoContextProps {
    items: TodoItem[] | [];
    activeFilter: TodoFilter;
    addItem: (item: TodoItem) => void;
    deleteItem: (itemId: string) => void;
    editItem: (item: TodoItem) => void;
    clearCompleted: () => void;
    setActiveFilter: (activeFilter: TodoFilter) => void;
}