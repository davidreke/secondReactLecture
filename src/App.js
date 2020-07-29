// Below is the import for functional components
// import React from 'react';

// import for class components
import React, { Component } from 'react';
// import people from people
import People from './people'


class App extends Component{

  render () {
    return (
      <div className="App">
        <h1>Jamie eats dirt</h1>
        <p>Hi class! </p>
        {/* importing the people component into JSX */}
        {/* We pass data from one component do another with  props */}
        {/* We pass props by giving our components attributes */}
        <People name="Austin" age="22" favoriteFood="pizza" />
        <People name="Saeed" age="29" favoriteFood="buffalo wings" />
      </div>
    )
  }
}

export default App;
