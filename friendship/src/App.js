import React from 'react';
import styled from 'styled-components';
import './App.css';

// Router
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';
import Message from './Message';
import Ranking from './Ranking';

// Redux
import { connect } from 'react-redux';

// firebase
import { firestore } from './firebase';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => {}
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    // console.log(this.props);

    const friend = firestore.collection("friend");

    friend.get().then((docs) => {
      let friend_list = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          friend_list = [...friend_list, { id: doc.id, ...doc.data() }];
          console.log(friend_list);
        }
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Switch>
            <Route path="/quiz" component={Quiz} />
            <Route path="/" exact component={Start} />
            <Route path="/score" component={Score} />
            <Route path="/message" component={Message} />
            <Route path="/ranking" component={Ranking} />
          </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
