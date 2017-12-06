import React from 'react';

import Todo from './Todo';

class App extends React.Component {

  fun(event){
    alert("Alert");
  }

  handleClick(event) {
    console.log(event.target.value)
  }


  render(){
    //debugger
    return (
      <div>
      <Todo alert ={this.fun}/>

      <input onChange={(event) => this.handleClick(event)} />

      <button onClick={() => this.fun()}>Trigger Alert</button>
    </div>
    )
  }
}




App.defaultProps={
  allTasks: [{
  task: 'do your homework',
  importance: '1',
  completed: false
  }]
}


export default App;
