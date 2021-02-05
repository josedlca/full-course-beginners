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
      isLoggedIn: false
    }
  }
  render(){
    return(
      <div>
        <h1>You are currently logged (
          {this.state.isLoggedIn ? 'in':'out'}
        )
        </h1>
      </div>
    )
  }
}

export default App;
