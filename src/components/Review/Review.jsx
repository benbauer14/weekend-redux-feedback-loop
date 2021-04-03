import {useSelector} from 'react-redux'

function Review () {
    
    const feedback= useSelector((store)=>{
        return store
    })

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