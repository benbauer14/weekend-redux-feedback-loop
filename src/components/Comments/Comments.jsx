import { useDispatch } from "react-redux"
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Comments () {
        const dispatch = useDispatch()
    
        let [comments, setComments] = useState("")
    
        return(
            <>
            <h2>Comments</h2>
            <div>
                <input type="text" placeholder="Comments" onChange={(event) => setComments(event.target.value)}></input>
                <br></br>
                <Link to='/Review'>
                    <button onClick={() => dispatch({type: 'comment', payload: comments}) }>Click</button>
                </Link>
            </div>
            </>
        )
    }
export default Comments