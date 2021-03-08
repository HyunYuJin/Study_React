import React from 'react';
import './App.css';
import BucketList from './BucketList';

// 1. 함수형 컴포넌트 선언 방식
// 원래는 덤프 컴포넌트라는 별명을 가질정도로 state 값을 가질 수 없었다.
// 하지만 등장한 React hooks를 이용해서 state 값을 가질 수 있게 되었다.
// function App() {
//   return (
//     <div className="App">
//       <h1>내 버킷리스트</h1>
//       <BucketList/>
//     </div>
//   );
// }

// 2. 클래스형 컴포넌트 선언 방식
// 해당 컴포넌트가 어떤식으로 동작할지에 대해 더 세세하게 작성을 한다.
class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = { // App 컴포넌트의 state를 정의한다.
      list: ['스카이 다이빙', '머리 빡빡 밀어보기', '자취 해보기'],
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트
  render() {
    // 만든 state를 불러오기
    console.log(this.state);

    return (
      <div className="App">
        <h1>내 버킷리스트</h1>
        {/* state에 list라는 값을 넘겨준다. */}
        <BucketList list={ this.state.list } />
      </div>
    );
  }
}

export default App;