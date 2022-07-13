import { useState, useEffect } from "react"



const useModal = (ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const closeOnClick = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const changeModalState = (e) => {
            if (isOpen === true && e.target == ref.current) {
                setIsOpen(false)
            }
        }

        window.addEventListener('click', changeModalState())

        return () => {
            window.removeEventListener('click', changeModalState())
        }
    })

    return { isOpen, closeOnClick }
}

export default useModal