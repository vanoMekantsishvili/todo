import React, { FC, useCallback, useContext, useState } from 'react'
import classnames from 'classnames';
import Checkbox from '../../../components/Checkbox'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { ReactComponent as RemoveIcon } from "../../../assets/close.svg";
import { ItemProps } from './props'
import { TodoContext, TodoItem } from '../../../contexts/TodoContext'
import './styles.scss'

const Item: FC<ItemProps> = ({item}) => {
    const { deleteItem, editItem } = useContext(TodoContext);

    const [isActionsVisible, setIsActionsVisible] = useState<boolean>(false)
    const [isEditModeEnabled, setIsEditModeEnabled] = useState<boolean>(false)

    const [initialItem, setInitialItem] = useState(item)

    const onInputBlur = (updatedItem: TodoItem): void => {
        setIsEditModeEnabled(false)
        if(updatedItem.text.trim().length && item.text !== updatedItem.text) {
            editItem({...item, text: updatedItem.text})
        }
    }

    return (
        <div className='item-wrapper'>
            <Checkbox 
                onChange={(isCompleted) => editItem({...initialItem, isCompleted: isCompleted})} 
                isInitialValueChecked={initialItem.isCompleted}
            />
            <div
                className='item-wrapper__actions-wrapper'
                onMouseEnter={() => setIsActionsVisible(true)} 
                onMouseLeave={() => setIsActionsVisible(false)}
            >
               <Input 
                    className='item-wrapper__input' 
                    initialValue={initialItem.text}
                    onChange={(value) => setInitialItem({...initialItem, text: value})}
                    disabled={!isEditModeEnabled}
                    onBlur={() => onInputBlur(initialItem)}
                />
                <div className={classnames(
                    'item-wrapper__actions', 
                    isActionsVisible && 'item-wrapper__actions--visible'
                )}>
                    <Button
                        className='item-wrapper__delete'
                        onClick={() => setIsEditModeEnabled(true)}>
                        <RemoveIcon className='item-wrapper__delete-icon' stroke='#ffffff'/>
                    </Button>
                    <Button
                        className='item-wrapper__delete'
                        onClick={() => deleteItem(item.id)}>
                        <RemoveIcon className='item-wrapper__delete-icon' stroke='#ffffff'/>
                    </Button>
                </div> 
            </div>
        </div>
  )
}


export default Item
