import React ,{ Component }from  'react';
import './App.css';
import Userinput from './Components/Userinput/Userinput';
import Useroutput from './Components/Useroutput/Useroutput';


class App extends Component {

  state={
    Useroutput:[{
      name:"krupa", age:"22"
    }]
  }
  buttonClickHandler=()=>{
    console.log('clicked');
    this.setState({
      Useroutput:[{
        name: 'krupank', age:'20'
      }]
    })
  }
 
  render() {
  return (
    <div className="App">
     <button onClick={this.buttonClickHandler}>click here</button>
<p>i am {this.state.Useroutput[0].name} my age is {this.state.Useroutput[0].age}</p>
     <Userinput/>
     <Useroutput name="krupa"/>
     <Useroutput name="krupa"/>
     <Useroutput name="krupa"/>

    </div>
  )
  }
};

export default App;
