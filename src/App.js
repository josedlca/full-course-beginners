import React from 'react'
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

class App extends React.Component{
  render(){
    return(
      <div>
        <Header username='Jose De La Cruz'/>
        <Greeting/>
      </div>
    )
  }
}

export default App;
