import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import BandPage from './components/BandPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/:category' component={BandPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
