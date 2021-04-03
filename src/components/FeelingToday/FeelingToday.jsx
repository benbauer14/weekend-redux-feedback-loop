import { useDispatch } from "react-redux"
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

function FeelingToday () {
    const dispatch = useDispatch()
    const history = useHistory()
    
    let [feeling, setFeeling] = useState("")

    const sendFeelings = () => {
        if(feeling === ""){
            alert('A rating must be provided before moving on.')
        } else{
        dispatch({type: 'feeling', payload: feeling})
        history.push('/Understanding')
        }
    }

    return(
        <>
        <h2>Feeling Fine</h2>
        <div>
            <input type="radio" name="feels" value="1" onChange={(event) => setFeeling(event.target.value)}/>1
            <input type="radio" name="feels" value="2" onChange={(event) => setFeeling(event.target.value)}/>2
            <input type="radio" name="feels" value="3" onChange={(event) => setFeeling(event.target.value)}/>3
            <input type="radio" name="feels" value="4" onChange={(event) => setFeeling(event.target.value)}/>4
            <input type="radio" name="feels" value="5" onChange={(event) => setFeeling(event.target.value)}/>5
            <br></br>
                <button onClick={() => sendFeelings()}>Click</button>
        </div>
        </>
    )
}
export default FeelingToday