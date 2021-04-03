import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom'

//routes
import FeelingToday from '../FeelingToday/FeelingToday'
import Understand from '../Understand/Understand'
import Supported from '../Supported/Supported'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import ThankYou from '../ThankYou/ThankYou'
import Admin from '../Admin/Admin'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  const randomName = () =>{
    let randomNum = Math.floor(Math.random() * 4)
    switch(randomNum){
      case 0:
        dispatch({type: "name", payload: "Ben"})
        return "Ben"
        break;
      case 1:
        dispatch({type: "name", payload: "Erica"})
        return "Erica"
        break;
      case 2:
        dispatch({type: "name", payload: "June"})
        return "June"
        break;
      case 3:
        dispatch({type: "name", payload: "Max"})
        return "Max"
        break;
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div className="navLeft">

        </div>
        <div className="navCenter">
          <h1 className='App-title'>Daily Feedback!</h1>
          <h4>Don't forget it!</h4>
        </div>
        <div className="navRight">
          <h5>Welcome back, {randomName()}!</h5>
        </div>

      </header>
      <HashRouter>
        <Route path='/' exact>
          <FeelingToday />
        </Route>
        <Route path='/Understanding'>
          <Understand />
        </Route>
        <Route  path='/Supported'>
          <Supported />
        </Route>
        <Route path='/Comments'>
          <Comments />
        </Route>
        <Route path='/Review'>
          <Review />
        </Route>
        <Route path='/ThankYou'>
          <ThankYou />
        </Route>
        <Route path='/Admin'>
          <Admin />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
