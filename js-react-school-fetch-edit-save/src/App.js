import React, { Component } from 'react';
import GitHubUserInfo from './components/GitHubUserInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
          <GitHubUserInfo
            username='Juli14'
           />
      </div>
    );
  }
}

export default App;
