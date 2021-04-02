import { useDispatch } from "react-redux"
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Supported () {
        const dispatch = useDispatch()
    
        let [support, setSupport] = useState("")
    
        return(
            <>
            <h2>Support</h2>
            <div>
                <input type="radio" name="feels" value="1" onChange={(event) => setSupport(event.target.value)}/>1
                <input type="radio" name="feels" value="2" onChange={(event) => setSupport(event.target.value)}/>2
                <input type="radio" name="feels" value="3" onChange={(event) => setSupport(event.target.value)}/>3
                <input type="radio" name="feels" value="4" onChange={(event) => setSupport(event.target.value)}/>4
                <input type="radio" name="feels" value="5" onChange={(event) => setSupport(event.target.value)}/>5
                <br></br>
                <Link to='/Comments'>
                    <button onClick={() => dispatch({type: 'support', payload: support}) }>Click</button>
                </Link>
            </div>
            </>
        )
    }
export default Supported