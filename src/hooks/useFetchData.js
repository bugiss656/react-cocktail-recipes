import axios from "axios"
import { useEffect, useState } from "react"


const useFetchData = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const controller = new AbortController()

        axios.get(url, {
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setData(response.data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
            })
        
            return () => {
                controller.abort()
            }
    }, [url])

    return { data, isLoading, error }
}

export default useFetchData