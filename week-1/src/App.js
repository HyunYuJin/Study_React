import React from 'react';
import BucketList from './BucketList';
import './scss_ex.scss';
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Detail from './Detail';
import NotFound from './NotFound';
import Progress from './Progress';
import { connect } from 'react-redux'; // Component와 Redux를 연결해주기 위해 사용
import { loadBucket, createBucket } from './redux/modules/bucket';

// Redux에 있는 state를 해당 component에 props로 받아오는 역할
// Store가 가지고 있는 상태 값을 props로 받아오기 위한 함수
const mapStateToProps = (state) => {
  return { bucket_list: state.bucket.list };
}

// action이 생기는 것을 감시하고 dispatch를 넘겨주는 역할
// 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수
const mapDispatchToProps = (dispatch) => {
  // ActionCreate 함수
  // Action을 반환해야 Reducer에서 처리할 수 있다!
  return {
    load: () => {
      dispatch(loadBucket());
    },

    create: (bucket) => { // Redux store에 추가해준다.
      dispatch(createBucket(bucket));
    }
  }
}

// 클래스형 컴포넌트
class App extends React.Component {
  constructor(props) {
    super(props);
    
    // App 컴포넌트의 state를 정의한다.
    this.state = {
      name: "미더덕"
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.props);
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Title >내 버킷리스트</Title>
          <Progress />
          <Line/>
          {/* props를 넘겨줄 때 render를 쓴다. */}
          <Switch>
            <Route exact path="/" render={(props) => <BucketList list={this.props.bucket_list} history={this.props.history} />} />
            <Route path="/detail/:index" component={Detail} />
            <Route render={(props) => <NotFound history={this.props.history} />} />
          </Switch>
        </Container>
        <Add>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>
        </Add>
        <button onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}>위로가기</button>
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
  color: #996699;
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
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    padding: 5px;
  }

  & input {
    border-radius: 5px;
    margin-right: 10px;
    border: 1px solid #888;
    width: 70%;

    &:focus {
      outline: none;
      border: 1px solid #996699;
    }
  }

  & button {
    width: 25%;
    color: #fff;
    border: 1px solid #996699;
    background-color: #996699;
  }
`;

// connect로 component와 store를 엮어준다.
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));