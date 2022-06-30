import './Checkbox.css'


const Checkbox = ({ labelText, id, className, isChecked, onChange }) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input 
                type="checkbox" 
                id={id}
                className={`checkbox ${className}`}
                checked={isChecked}
                onChange={onChange}
            />
        </>
    )
}

export default Checkbox