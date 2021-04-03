import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import {Button} from '@material-ui/core'

function ThankYou () {
    const dispatch = useDispatch()
    const history = useHistory() 

    const newFeedback = () => {
        dispatch({type: 'clear'})
        history.push('/')
    }

    return(
        <>
        <h2>Thank you for providing feedback!</h2>
        <Button variant="contained" color="primary" onClick={(event) => newFeedback()}>Leave New Feedback</Button>
        </>
    )
}
export default ThankYou