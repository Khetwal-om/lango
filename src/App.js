import React,{ Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Tutorials from './components/Tutorials/Tutorials'
import ScrollToTop from './ScrollToTop'
import Footer from './components/Footer/Footer'

import './App.css'
import Home from './components/Home/Home'



class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <ScrollToTop/>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:instructor" exact component={Tutorials} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </>
    )
  }
}

export default App