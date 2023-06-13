import React, { useState, ChangeEvent, useEffect } from 'react';
import { InputProps } from './props'

const Input: React.FC<InputProps> = ({ 
    initialValue, 
    className, 
    placeholder,
    type='text',
    disabled,
    onChange,
    onBlur
}) => {

    const [value, setValue] = useState<string>(initialValue || '')

    useEffect(() => {
        if(typeof initialValue === 'string') {
            setValue(initialValue)
        }
    }, [initialValue])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        onChange(event.target.value)
    }

    return (
      <input
        type={type}
        onChange={(event) => handleChange(event)}
        onBlur={onBlur}
        value={value}
        className={className}
        placeholder={placeholder}
        disabled={disabled}
      />
    );
  };
  
  export default Input;