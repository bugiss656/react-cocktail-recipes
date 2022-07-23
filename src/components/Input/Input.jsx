import { forwardRef } from 'react'

import './Input.css'


const Input = forwardRef(({ type, value, placeholder, onFocus, onBlur, onChange }, ref) => (
    <input
        ref={ref}
        type={type}
        className="input"
        value={value}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
    />
))

export default Input