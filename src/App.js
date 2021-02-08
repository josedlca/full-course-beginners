import React,{Component} from 'react'
import './App.css';
import Header from './components/Header'
import Greeting from './components/Greeting'

class App extends Component{
  constructor(){
    super()
    this.state={
      log: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState => {
      return{
        log: !prevState.log 
      }
    })
  }

  render(){
    return(
      <div>
        <p>
          {this.state.log?'You are logged in':'You are logged out'}
        </p>
        <button onClick={this.handleClick}>
          {this.state.log?'sign out':'sign in'}
        </button>
      </div>
    )
  }
}

export default App;
