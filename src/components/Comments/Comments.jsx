import { useDispatch } from "react-redux"
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

function Comments () {
        const dispatch = useDispatch()
        const history = useHistory()

        let [comments, setComments] = useState("")
    
        const sendComments = () => {
            if(comments === ""){
                alert('Comments must be provided before moving on.')
            } else{
                dispatch({type: 'comment', payload: comments})
                history.push('/Review')
            }
        }

        return(
            <>
            <h2>Comments</h2>
            <div>
                <input type="text" placeholder="Comments" onChange={(event) => setComments(event.target.value)}></input>
                <br></br>
                <Link to='/Supported'>
                    <button>Back</button>
                </Link>
                    <button onClick={() => sendComments() }>Review Feedback</button>
            </div>
            </>
        )
    }
export default Comments