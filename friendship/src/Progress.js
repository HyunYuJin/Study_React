import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = (props) => {
    const quiz_list = useSelector(state => state.quiz.quiz);
    // 사용자의 응답 리스트
    const answers = useSelector((state) => state.quiz.answers);
    let count = answers.length;

    return (
        <ProgressBar>
            <Highlight width={(count / quiz_list.length) * 100 + '%'} />
            <Dot />
        </ProgressBar>
    );
}

const ProgressBar = styled.div`
    width: 100%;
    height: 20px;
    background-color: #eee;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
`;

const Highlight = styled.div`
    background-color: #f1c32ab9;
    height: 100%;
    border-radius: 10px;
    width: ${props => props.width};
    transition: width 1s;
`;

const Dot = styled.div`
    background: #fff;
    border: 5px solid #f1c32ab9;
    box-sizing: border-box;
    margin: 0px 0px 0px -10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export default Progress;