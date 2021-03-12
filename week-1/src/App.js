import React from 'react';
import Start from './Start';
import './style.css';

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    
    // App 컴포넌트의 state를 정의한다.
    this.state = {
      name: "미더덕"
    };
  }

  render() {
    return (
      <div className="App">
        <Start name={this.state.name} />
      </div>
    )
  }
}

export default App;