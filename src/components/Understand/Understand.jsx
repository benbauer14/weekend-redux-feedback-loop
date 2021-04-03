import { useDispatch } from "react-redux"
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

function Understand () {
        const dispatch = useDispatch()
        const history = useHistory()
    
        let [understand, setUnderstand] = useState("")
    
        const sendUnderstand = () => {
            if(understand === ""){
                alert('A rating must be provided before moving on.')
            } else{
                dispatch({type: 'understand', payload: understand})
                history.push('/Supported')
            }
        }

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
                <Link to='/'>
                    <button>Back</button>
                </Link>
                    <button onClick={() => sendUnderstand() }>Click</button>
            </div>
            </>
        )
    }
export default Understand