import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router'

function Review () {
    
    const history = useHistory()
    const dispatch = useDispatch()

    const feedback= useSelector((store)=>{
        return store
    })

    const submitFeedback = () => {
        console.log(feedback)
        axios({
            method: 'POST',
            url: '/sendFeedback',
            data: feedback
        }).then((response) =>{
            console.log('back from POST:', response)
            history.push('/ThankYou')
        }).catch ((err) =>{
            alert('Error sending feedback. Please try again')
            console.log(err)
        })
    }

    const clearFeedback = () => {
        dispatch({type: 'reset'})
        history.push('/')
    }

    return(
    <>
        <h2>Review Feedback</h2>
        <p>How are you feeling today? - {feedback.feeling}</p>
        <p>How are understanding the content? - {feedback.understand}</p>
        <p>How supported do you feel? - {feedback.supported}</p>
        <p>Any comments you wish to share? - {feedback.comments}</p>
        <button onClick={(event) => submitFeedback()}>Submit</button>
        <button onClick={(event) => clearFeedback()}>Clear</button>
    </>
    )
}
export default Review