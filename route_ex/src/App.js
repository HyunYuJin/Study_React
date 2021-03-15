import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'; // history 객체를 사용하기 위해서
import Home from './Home';
import Cat from './Cat';
import Dog from './Dog';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.props); // withRouter가 있어야 보인다.
  }

  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home으로 가기</Link>
          <Link to="/cat/nabi">Cat으로 가기</Link>
          <Link to="/dog">Dog로 가기</Link>
        </div>

        {/* 중복 주소를 처리하기 위해서는 exact를 붙여주면 된다. */}
        <Route exact path="/" component={Home} />
        <Route path="/cat/:cat_name" component={Cat} />
        <Route path="/dog" component={Dog} />

        <button onClick={(() => {
          this.props.history.push('/cat/nabi');
        })}>고양이 페이지로 가기</button>
        <button onClick={(() => {
          this.props.history.goBack();
        })}>뒤로가기</button>
      </div>
    )
  }
}

export default withRouter(App);