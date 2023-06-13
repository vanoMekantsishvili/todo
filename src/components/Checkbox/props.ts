import React, { ChangeEvent } from 'react';

export interface CheckboxProps {
    isInitialValueChecked: boolean;
    onChange: (isChecked: boolean) => void;
}