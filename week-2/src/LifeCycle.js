import React from "react";

class LifecycleEx extends React.Component {
    // 생성자 함수
    constructor(props) {
        super(props);
        
        this.state = {
            dog_name: '개님',
        };
        
        console.log('in constructor!');
    }
  
    changeDogName = () => {
        // state 업데이트하는 방법
        // 지금은 componentDidUpdate()를 보기 위해 쓰는 거니까, 처음보는 거라고 당황하지 말기!
        this.setState({dog_name: '바둑이'});

        console.log('강아지 이름을 바꾼다!');
    }
    
    componentDidMount(){
        console.log('in componentDidMount!');
    }
  
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState);
        console.log('in componentDidUpdate!');
    }
    
    componentWillUnmount(){
        console.log('in componentWillUnmount!');
    }
    
    render() {
        console.log('in render!');
        
        return (
            <div>
                {/* render 안에서 컴포넌트의 데이터 state를 참조할 수 있지만 변경해서는 안된다. */}
                <h1>우리집 강아지 이름은 {this.state.dog_name}입니다.</h1>
                <button onClick={this.changeDogName}>강아지 이름 바꾸기</button>
            </div>
        );
    }
}

export default LifecycleEx;