
import './App.css';
import React, { Component } from 'react'
import NavBar from './componenet/Navbar';
import News from './componenet/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  pageSize = 6
  apiKey = process.env.REACT_APP_NEWS_API ;
  render() {
    return (
      <Router>
      <div>
        
          <NavBar />
          <Routes>
            
            
          <Route    path='/general' element={<News key= 'general'  apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general" />}/>
            
        
           <Route   path='/entertainment' element={<News key= 'entertainment' apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment" />}/>
            
          
            
          <Route    path='/health' element={<News key='health' apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="health" />} />
            
         
           <Route   path='/science' element={ <News key= 'science' apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="science" />}/>
           
          
           <Route   path='/sports' element={ <News key= 'sports' apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sports" />}/>
           
          
           <Route   path='/business' element={<News key= 'business' apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="business" />}/>
            
        
           <Route   path='/technology' element={ <News key= 'technology' apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="technology" />}/>
           
         </Routes>
          
        </div>
        </Router>
    )
  }
}
