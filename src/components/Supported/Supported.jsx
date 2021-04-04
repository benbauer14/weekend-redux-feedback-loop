import { useDispatch } from "react-redux"
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Button} from '@material-ui/core'

function Supported () {
        const dispatch = useDispatch()
        const history = useHistory()
    
        let [support, setSupport] = useState("")
    
        const sendSupport = () => {
            //do not allow for dispatch if feedback isn't provided
            if(support === ""){
                alert('A rating must be provided before moving on.')
            } else{
                dispatch({type: 'support', payload: support}) 
                history.push('/Comments')
            }
        }

        return(
            <>
            <h2>How well are you being supported?</h2>
            <div>
                <input type="radio" name="feels" value="1" onChange={(event) => setSupport(event.target.value)}/>1
                <input type="radio" name="feels" value="2" onChange={(event) => setSupport(event.target.value)}/>2
                <input type="radio" name="feels" value="3" onChange={(event) => setSupport(event.target.value)}/>3
                <input type="radio" name="feels" value="4" onChange={(event) => setSupport(event.target.value)}/>4
                <input type="radio" name="feels" value="5" onChange={(event) => setSupport(event.target.value)}/>5
                <br></br>
                <Link to='/Understanding'>
                    <Button variant="contained">Back</Button>
                </Link>
                    <Button variant="contained" color="primary" onClick={() => sendSupport() }>Next →</Button>
            </div>
            </>
        )
    }
export default Supported