import { useDispatch } from "react-redux"
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Button, hexToRgb} from '@material-ui/core'

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
            <h2>How well are you understanding the content?</h2>
            <div>
                <input type="radio" name="feels" value="1" onChange={(event) => setUnderstand(event.target.value)}/>1
                <input type="radio" name="feels" value="2" onChange={(event) => setUnderstand(event.target.value)}/>2
                <input type="radio" name="feels" value="3" onChange={(event) => setUnderstand(event.target.value)}/>3
                <input type="radio" name="feels" value="4" onChange={(event) => setUnderstand(event.target.value)}/>4
                <input type="radio" name="feels" value="5" onChange={(event) => setUnderstand(event.target.value)}/>5
                <br></br>
                <Link to='/'>
                    <Button variant="contained">Back</Button>
                </Link>
                <Button variant="contained" color="primary" onClick={() => sendUnderstand() }>Next</Button>
            </div>
            </>
        )
    }
export default Understand