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
      name: 'Jose',
      age: 21
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}

export default App;
