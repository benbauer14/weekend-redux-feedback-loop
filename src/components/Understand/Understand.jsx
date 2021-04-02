import { useDispatch } from "react-redux"
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Understand () {
        const dispatch = useDispatch()
    
        let [understand, setUnderstand] = useState("")
    
        return(
            <>
            <h2>Understanding</h2>
            <div>
                <input type="radio" name="feels" value="1" onChange={(event) => setUnderstand(event.target.value)}/>1
                <input type="radio" name="feels" value="2" onChange={(event) => setUnderstand(event.target.value)}/>2
                <input type="radio" name="feels" value="3" onChange={(event) => setUnderstand(event.target.value)}/>3
                <input type="radio" name="feels" value="4" onChange={(event) => setUnderstand(event.target.value)}/>4
                <input type="radio" name="feels" value="5" onChange={(event) => setUnderstand(event.target.value)}/>5
                <br></br>
                <Link to='/Supported'>
                    <button onClick={() => dispatch({type: 'understand', payload: understand}) }>Click</button>
                </Link>
            </div>
            </>
        )
    }
export default Understand