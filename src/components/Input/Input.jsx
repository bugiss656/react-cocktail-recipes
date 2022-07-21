import './Input.css'


const Input = ({ type, value, placeholder, onFocus, onBlur, onChange }) => {
    return (
        <input 
            type={type} 
            className="input" 
            value={value} 
            placeholder={placeholder} 
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
        />
    )
}

export default Input