import React from 'react';
import styled from 'styled-components';
import './App.css';
import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "미더덕",
      page: "quiz",
      list: [{
        question: "미더덕은 1살이다.",
        answer: "O"
      },{
        question: "미더덕은 2살이다.",
        answer: "O"
      }, {
        question: "미더덕은 3살이다.",
        answer: "O"
      }, {
        question: "미더덕은 4살이다.",
        answer: "O"
      }],
      scoreMsg: "아주 찐친이네요! :)"
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          {this.state.page === 'start' && <Start name={this.state.name} />}
          {this.state.page === 'quiz' && <Quiz list={this.state.list} />}
          {this.state.page === 'score' && <Score name={this.state.name} scoreMsg={this.state.scoreMsg} />}
        </Container>
      </div>
    )
  }
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
`;

export default App;
