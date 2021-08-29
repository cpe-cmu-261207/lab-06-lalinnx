import axios from 'axios'
import { useEffect, useState } from 'react'



type Task = {
    time: {
        updated: string;
    }
    bpi: {
        THB: {
            rate_float: number
        }
    }
}


const Current = () => {

    const [Task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    //fetch with async await
    const fetchApi = async () => {
        try {
            setLoading(true)
            const resp = await axios.get<Task>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
            setTask(resp.data)
            setLoading(false)
        }
        catch (err) {
            setError(true)
            setLoading(false)
        }
    }
    useEffect(() => {
		 fetchApi()
	}, [])

    const render = () => {
        if (loading)
            return (
                <div className='text-center space-y-3'>
                <p className='text-2xl font-semibold'>Current price</p>
                <p className='text-2xl'>Loading ...</p>
            </div>
            )
        else if (error)
            return <p>There was some error !</p>
        else
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>{Task?.bpi.THB.rate_float.toLocaleString()} THB</p>
                    <p> (Last updated {Task?.time.updated}) </p>
                </div>
            )
    }



    return (
        render()
    )
}


export default Current