import { useState } from "react"
import { useHistory } from 'react-router-dom'


const History = () => {
    const history = useHistory();
    const [start, setStart] = useState<string | null>(null);
    const [end, setEnd] = useState<string | null>(null);

    const Result = () => {
        if(start === null || end === null || start > end){
            alert("Please select start date and end date correctly")
        }
        else{
        history.push(`/history/result?start=${start}&end=${end}`)
        }
    }

    return (
        <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={e => setStart(e.target.value)}></input>
            <span>To date</span>
            <input type='date' onChange={e =>setEnd(e.target.value)}></input>
            <br />
            <button onClick={Result}>Get data</button>
        </div>
    )
}


export default History