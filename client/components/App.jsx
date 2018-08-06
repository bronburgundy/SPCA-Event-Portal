import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Header} from './Header'
// import {Banner} from './Banner'
import Main from './Main'
// import Login from './Login'
import {Footer} from './Footer'
// import WaitIndicator from './WaitIndicator'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Header} />
        <Route path='/' component={Main} />
        {/* <WaitIndicator /> */}
        {/* <Route exact path='/' component={Login} /> */}
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}

export default App
