import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import SearchBar from './components/searchBar'
import Profile from './components/profile'


class App extends Component{
  constructor() {
    super()

    this.state = {
      search: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleSearch = (book) => {
    this.setState({ search: book })
  }

  handleClear = () => {
    this.setState({ search: '' })
  }

  render() {
    return (
      <div className="App">
        <Header className='header'/>
        <SearchBar handleSearch={this.handleSearch} handleClear={this.handleClear}/>
        < Profile search={this.state.search}/>
      </div>
    );
  }
}

export default App
