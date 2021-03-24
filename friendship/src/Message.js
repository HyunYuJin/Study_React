import React from 'react';
import styled from 'styled-components';
import img from './assets/user-img.jpeg'

// Redux Hook
import { useSelector, useDispatch } from 'react-redux';
import { addRank } from './redux/modules/rank';

const Message = (props) => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.quiz.name);
    const answers = useSelector((state) => state.quiz.answers);
    const user_name = useSelector((state)=>state.rank.user_name);
    const input_text = React.useRef(null);

    let correct = answers.filter((answer) => {
        return answer;
    });
    
    // 점수 계산하기
    let score = (correct.length / answers.length) * 100;

    return (
        <MsgContainer>
            <Outter>
                <Profile src={img} alt="프로필" />
                <h1><span>{name}</span>에게 남기는 한마디</h1>
                <Textarea placeholder="한 마디 적기" ref={input_text}></Textarea>
                <button onClick={() => {
                    let rank_info = {
                        score: parseInt(score),
                        name: user_name,
                        message: input_text.current.value,
                        current: true,
                    };
                    // 랭킹 정보 넣기
                    dispatch(addRank(rank_info));
                    // 주소 이동
                    props.history.push('/ranking');
                }}
                style={{
                    padding: "8px 24px",
                    backgroundColor: "#f1c32a",
                    borderRadius: "30px",
                    border: "#f1c32a",
                }}
                >한마디하고 랭킹 보러 가기</button>
            </Outter>
        </MsgContainer>
    )

}

const MsgContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 16px;
    box-sizing: border-box;
`;

const Outter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 0px 5vw;
    box-sizing: border-box;
    max-width: 400px;
    margin: 0px auto;

    & > h1 {
        font-size: 1.5em;
        margin: 0px;
        line-height: 1.4;
    }

    & > h1 > span {
        background-color: #fef5d4;
        padding: 5px 10px;
        border-radius: 30px;
    }
`;

const Profile = styled.img`
    width: 80%;
    margin: -70px 16px 48px 16px;
`;

const Textarea = styled.textarea`
    padding: 10px;
    margin: 24px 0px;
    border: 1px solid #dadafc;
    border-radius: 10px;
    width: 100%;
    height: 50px;
`;

export default Message;