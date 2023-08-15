import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  apiKeey="662b4dbb31df4a329654e8a1b7123e21"

  state={
    progress: 0
  }
  setProgress=(progress)=>{
this.setState({progress: progress})

  }
  render() { 
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='orange'
        progress={this.state.progress}/>
        <Routes>
        <Route  exact path='/' element={<News apiKeey={this.apiKeey} setProgress={this.setProgress} key="home" country="in" category="general"  />}/>
        <Route  exact path='/general' element={<News apiKeey={this.apiKeey}  setProgress={this.setProgress} key="general" country="in" category="general"  />}/>
        <Route  exact path='/business' element={<News apiKeey={this.apiKeey} setProgress={this.setProgress} key="business" country="in" category="business"  />}/>
        <Route  exact path='/science' element={<News apiKeey={this.apiKeey} setProgress={this.setProgress} key="science" country="in" category="science"  />}/>
        <Route  exact path='/entertainment' element={<News apiKeey={this.apiKeey} setProgress={this.setProgress} key="entertainment" country="in" category="entertainment"  />}/>
        <Route  exact path='/technology' element={<News apiKeey={this.apiKeey} setProgress={this.setProgress} key="technology" country="in" category="technology"  />}/>
        <Route  exact path='/health' element={<News apiKeey={this.apiKeey} setProgress={this.setProgress} key="health" country="in" category="health"  />}/>
        <Route  exact path='/sports' element={<News apiKeey={this.apiKeey} setProgress={this.setProgress}  key="sports" country="in" category="sports"  />}/>
        </Routes>
  
      </div>
    )
  }
}



