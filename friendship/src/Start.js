import React from 'react';
import img from './assets/scc_img01.png';

// Redux Hook
import { useSelector, useDispatch } from 'react-redux';
// Redux
import { addUserName } from './redux/modules/rank'; 

const Start = (props) => {
    // 이벤트가 발생할 곳에 ActionCreators 함수를 선언한다.
    const dispatch = useDispatch();
    const name = useSelector((state) => state.quiz.name);
    const input_text = React.useRef(null);

    console.log("Start", props, name);

    return (
        <div className="outter">
            <img className="scc-img" src={img} alt="미더덕" />
            <h1>나는 <span>{name}</span>에 대해서 얼마나 알고있을까?</h1>
            <input className="text-box" type="text" placeholder="내 이름" ref={input_text} />
            
            <button className="button" onClick={() => {
                // 이름 저장
                dispatch(addUserName(input_text.current.value));
                // 페이지 이동
                props.history.push("/quiz");
            }}>시작하기</button>
        </div>
    )
}

export default Start;