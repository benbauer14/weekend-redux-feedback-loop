import axios from "axios"
import { useEffect, useState } from "react"
import ('./Admin.css')


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
const deleteFeedback = (id) => {
if(confirm("Do you want to delete feedback?")){
    axios({
        method: 'PUT',
        url: '/delete',
        data: {id:id}
    }).then((response) =>{
        console.log('back from PUT:', response)
        getFeedback();
    }).catch ((err) =>{
        alert('Error sending feedback. Please try again')
        console.log(err)
    })
}else{
    alert("Item not deleted")
}

}

const formatDate = (sqlDate) => {
    //format 2021-04-02T05:00:00.000Z
    let year = sqlDate.slice(0, 4)
    let monthday = sqlDate.slice(5, 10)
    return monthday + "-" + year
}

    useEffect(() => { getFeedback()},[])

    return(
        <>
        <h2>Daily Feedback History</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Date Submitted</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                    {feedbacks.map(feedback => {
                        return(                            
                            <>
                            <tr key={feedback.id}>
                                <td>{feedback.name}</td>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td>
                                <td>{formatDate(feedback.date)}</td>
                                <td><button onClick={() => deleteFeedback(feedback.id)}>🗑</button></td>
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