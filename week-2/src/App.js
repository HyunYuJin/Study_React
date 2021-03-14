import React from 'react';
import LifecycleEx from './LifeCycle';
import PracticeRef from './PracticeRef';
import Square from './Square';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3 // 초기 사각형을 만들어줄 수
    };

    this.div = React.createRef();
  }

  addSquare = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("[Class] Add Square!");
  }

  removeSquare = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert("No Square! :(");
    }
    console.log("[Class] Remove Square!");
  }

  hoverEvent = (e) => {
    console.log(e);
    console.log(e.target);

    e.target.style.backgroundColor = "pink";
  }

  // 등록을해주면
  componentDidMount() {
    this.div.current.addEventListener('mouseover', this.hoverEvent);
  }

  // 해제도 해주어야한다.
  componentWillUnmount() {
    this.div.current.removeEventListener('mouseover', this.hover);
  }

  render () {
    // map을 사용하기 위해 배열형태로 만들어주기
    // undefined 대신에 index 값으로 채워주기
    const square_count = Array.from({length: this.state.count}, (value, index) => (index));
    console.log(square_count);

    return (
      <div className="App">
        <div className="life">
          <LifecycleEx />
        </div>
        <hr />
        
        <div className="practiceRef">
          <PracticeRef />
        </div>
        <hr />
  
        <div className="square">
          <h3>Class 방식 State 관리</h3>
          {square_count.map((val, idx) => {
            return (
                <div 
                  key={idx}
                  style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "#EEE",
                    padding: "10px",
                    margin: "10px"
                  }}>사각형</div>
            )
          })}
          <button onClick={this.addSquare}>Add Square</button>
          <button onClick={this.removeSquare}>Remove Square</button>
        </div>

        {/* 함수형 */}
        <Square />
        <hr />

        <div className="EventListener">
          <h3>이벤트 리스너</h3>
          <div 
            ref={this.div}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#EEE",
              padding: "10px",
              margin: "10px"
            }}>이벤트리스너!!</div>
        </div>
      </div>
    );
  }
}

export default App;
