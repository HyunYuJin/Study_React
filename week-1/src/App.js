import React from 'react';
import BucketList from './BucketList';
// import Start from './Start';
// import './style.css';
import './scss_ex.scss';

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    
    // App 컴포넌트의 state를 정의한다.
    this.state = {
      name: "미더덕",
      list: ['자가용 장만하기', '스카이 다이빙', '인생 최종목표 알지?']
    };
  }

  render() {
    return (
      // <div className="App">
      //   <Start name={this.state.name} />
      // </div>

      <div className="App">
        <div className="container">
            <h1 className="title">내 버킷리스트</h1>
            <hr className="line"/>
            {/* 컴포넌트를 넣어줍니다. */}
            {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
            <BucketList list={this.state.list} />
        </div>
      </div>
    )
  }
}

export default App;