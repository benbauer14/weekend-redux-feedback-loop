import axios from "axios"
import { useEffect, useState } from "react"


function Admin () {
const [feedbacks, setFeedbacks] = useState([])

const getFeedback = () => {
    axios({
        type: 'GET',
        url: '/getFeedback'
    }).then ((response) =>{
        console.log(response.data.rows)
        setFeedbacks(response.data.rows)
    }).catch((err) =>{
        alert('Error in GET', err)
    })
}

    useEffect(() => { getFeedback()},[])

    return(
        <>
        <h2>Feeling Fine</h2>
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                    {feedbacks.map(feedback => {
                        return(                            
                            <>
                            <tr>
                                <td key={feedback.id}>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td> 
                            </tr>
                            </>
                            )   
                            })} 
            </tbody>
        </table>
        </>
    )
}
export default Admin