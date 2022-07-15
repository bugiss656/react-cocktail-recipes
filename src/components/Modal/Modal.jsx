import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsModalOpen, setModalState } from '../../features/pdf/pdfSlice'

import './Modal.css'


const Modal = ({ header, body, isOpen, onClick }) => {
    const dispatch = useDispatch()
    const ref = useRef()
    const isModalOpen = useSelector(selectIsModalOpen)


    useEffect(() => {
        const handleSetModalState = (e) => {
            if (isModalOpen === true && e.target === ref.current) {
                dispatch(setModalState(false))
            }
        }
        window.addEventListener('click', handleSetModalState)

        return () => {
            window.removeEventListener('click', handleSetModalState)
        }
    })

    return (
        <div ref={ref} className="modal-box" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-box__content">
                <div className="content__header d-flex flex-column align-items-center">
                    <div className="w-100 d-flex flex-row justify-content-end">
                        <div className="header__close-btn" onClick={onClick}>&times;</div>
                    </div>
                    <div className="w-100 d-flex-flex-row justify-content-start">
                        {header}
                    </div>
                </div>
                <div className="content__body d-flex">
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Modal