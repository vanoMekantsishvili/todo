import React, { FC, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { TodoContext } from '../../../contexts/TodoContext'
import './styles.scss'

const AddItem: FC = () => {    
    const { addItem } = useContext(TodoContext);

    const [newItem, setNewItem] = useState<string>('')

    
    const onAddNewItem = () => {
        if(newItem.trim().length) {
            addItem({
                id: uuidv4(),
                text: newItem,
                isCompleted: false
            })
            setNewItem('')
        }
        
    }

    return (
        <div className='add-item-wrapper'>
            <Input 
                className='add-item-wrapper__input'
                initialValue={newItem}
                placeholder='What needs to be done?'
                onChange={(value) => setNewItem(value)}
            />
            <Button onClick={onAddNewItem}>
                Add
            </Button>
        </div>
    )
}


export default AddItem
