import React, { FC, useState, ChangeEvent } from 'react';
import { CheckboxProps } from './props'


const Checkbox: FC<CheckboxProps> = ({ isInitialValueChecked, onChange }) => {
    const [isChecked, setIsChecked] = useState<boolean>(isInitialValueChecked)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked)
        onChange(event.target.checked)
    }

    return (
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
    );
};

export default Checkbox;