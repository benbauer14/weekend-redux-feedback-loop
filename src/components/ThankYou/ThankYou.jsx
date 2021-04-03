import { useDispatch } from "react-redux"
import { useHistory } from "react-router"

function ThankYou () {
    const dispatch = useDispatch()
    const history = useHistory() 

    const newFeedback = () => {
        dispatch({type: 'clear'})
        history.push('/')
    }

    return(
        <>
        <h2>Feeling Fine</h2>
        <button onClick={(event) => newFeedback()}>Leave New Feedback</button>
        </>
    )
}
export default ThankYou