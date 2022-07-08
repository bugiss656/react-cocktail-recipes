import './Select.css'


const Select = ({ labelText, id, className, name, selectValue, onChange, options }) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <select
                id={id}
                className={`select ${className}`}
                name={name}
                value={selectValue}
                onChange={onChange}
            >
                {options.map(option =>
                    <option key={option} value={option}>{option}</option>
                )}
            </select>
        </>
    )
}

export default Select