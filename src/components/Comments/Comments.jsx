import { useDispatch } from "react-redux"
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Button} from '@material-ui/core'

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
            <h2>Any comments you want to leave?</h2>
            <div>
                <input type="text" className="comments" placeholder="Comments" onChange={(event) => setComments(event.target.value)}></input>
                <br></br>
                <Link to='/Supported'>
                    <Button variant="contained" >Back</Button>
                </Link>
                    <Button variant="contained" color="primary" onClick={() => sendComments() }>Review Feedback</Button>
            </div>
            </>
        )
    }
export default Comments