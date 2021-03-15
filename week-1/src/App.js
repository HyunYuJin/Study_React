import React from 'react';
import BucketList from './BucketList';
// import Start from './Start';
// import './style.css';
import './scss_ex.scss';
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Detail from './Detail';
import NotFound from './NotFound';

// 클래스형 컴포넌트
class App extends React.Component {
  constructor(props) {
    super(props);
    
    // App 컴포넌트의 state를 정의한다.
    this.state = {
      name: "미더덕",
      list: ['자가용 장만하기', '스카이 다이빙', '인생 최종목표 알지?']
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text);
  }

  addList = () => {
    let list = this.state.list;
    const add = this.text.current.value;

    // 기존의 배열은 유지한 채로 새로운 배열을 만들어줌 -> 불변성 관리 또는 유지
    if (add !== '') this.setState({ list: [...list, add] });
    console.log("Add List");
  }

  render() {
    return (
      // <div className="App">
      //   <Start name={this.state.name} />
      // </div>

      <div className="App">
        <Container>
          <Title >내 버킷리스트</Title>
          <Line/>
          {/* props를 넘겨줄 때 render를 쓴다. */}
          <Switch>
            <Route exact path="/" render={(props) => <BucketList list={this.state.list} history={this.props.history} />} />
            <Route path="/detail" component={Detail} />
            <Route render={(props) => <NotFound history={this.props.history} />} />
          </Switch>
        </Container>
        <Add>
          <input type="text" ref={this.text} />
          <button onClick={this.addList}>버킷리스트 추가하기</button>
        </Add>
      </div>
    )
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 70vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const Add = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`

export default withRouter(App);