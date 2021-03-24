import React from 'react';
import styled from 'styled-components';

// Redux Hook
import { useSelector } from 'react-redux';

const Score = (props) => {
    console.log("Score: ", props);
    const name = useSelector((state) => state.quiz.name);
    const score_texts = useSelector((state) => state.quiz.score_texts);
    const quiz_answer = useSelector((state) => state.quiz.answers);
    
    console.log(score_texts, quiz_answer);

    // True는 정답. 정답만 골라내기
    let correct = quiz_answer.filter((answer) => {
        return answer;
    });
    let score = (correct.length / quiz_answer.length) * 100;
    let score_text = ""; // 점수별로 띄워줄 텍스트

    Object.keys(score_texts).map((s, idx) => {
        // 첫번째 텍스트 넣어주기
        if (idx === 0) {
            score_text = score_texts[s];
        }
        // 실제 점수와 기준 점수(키로 넣었던 점수) 비교해서 텍스트를 넣자!
        score_text = parseInt(s) <= score ? score_texts[s] : score_text;
    });

    return (
        <ScoreContainer>
            <Text>
                <span>{name}</span> 퀴즈에 <br />
                대한 내 점수는?
            </Text>

            <MyScore>
                <span>{score}</span>점
                <p>{score_texts[score]}</p>
            </MyScore>

            <Button onClick={(() => {
                props.history.push('/message');
            })}>{name}에게 한마디</Button>
        </ScoreContainer>
    );
}

const ScoreContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding: 16px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.h1`
    font-size: 1.5em;
    margin: 0;
    line-height: 1.4;

    & span {
        background-color: #fef5d4;
        padding: 5px 10px;
        border-radius: 30px;
    }
`;

const MyScore = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 2em;
    margin: 24px;

    & span {
        background-color: #fef5d4;
        padding: 5px 10px;
        border-radius: 30px;
    }

    & > p {
        margin: 24px 0;
        font-size: 16px;
        font-weight: 600;
    }
`;

const Button = styled.button`
    font-weight: 600;
    padding: 10px 24px;
    background-color: #f1c32a;
    border-radius: 30px;
    border: #f1c32a;
    margin: 8px;
    width: 80vw;
`;

export default Score;