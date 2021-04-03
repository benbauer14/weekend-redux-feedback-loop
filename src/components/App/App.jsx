import React from 'react';
import axios from 'axios';
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

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
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
