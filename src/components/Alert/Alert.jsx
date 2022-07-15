import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectIsAlertActive, setAlertState } from "../../features/pdf/pdfSlice"

import './Alert.css'


const Alert = ({ text }) => {
    const dispatch = useDispatch()
    const isAlertActive = useSelector(selectIsAlertActive)

    useEffect(() => {
        if (isAlertActive) {
            setTimeout(() => {
                dispatch(setAlertState(false))
            }, 3000)
        }
    }, [isAlertActive, dispatch])

    
    return (
        <div className="alert-box w-100 px-2 py-3" style={{ display: isAlertActive ? 'block' : 'none' }}>{text}</div>
    )
}

export default Alert