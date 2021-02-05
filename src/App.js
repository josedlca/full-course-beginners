import React,{Component} from 'react'
import './App.css';
import Header from './components/Header'
import Greeting from './components/Greeting'

// function App() {
//   return (
//     <div className="App">
//       Hello world
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super()
    this.state={
      count: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(
      prevState=>{
        return{
          count: prevState.count + 1
        }
      }
    )
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}

export default App;
