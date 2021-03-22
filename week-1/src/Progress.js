import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = (props) => {
    const bucket_list = useSelector(state => state.bucket.list);
    let count = 0;
    bucket_list.map((value, index) => {
        if (value.completed) count++;
    });
    console.log(bucket_list);

    return (
        <ProgressBar>
            <Highlight width={(count / bucket_list.length) * 100 + '%'} />
            <Dot></Dot>
        </ProgressBar>
    );
}

const ProgressBar = styled.div`
    width: 100%;
    height: 20px;
    background-color: #eee;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

const Highlight = styled.div`
    background-color: #996699;
    height: 100%;
    border-radius: 10px;
    width: ${props => props.width};
    transition: width 1s;
`;
// width라는 속성이 변했을 때 1초 동안 변화 속도를 정해준다.

const Dot = styled.div`
    background: #fff;
    border: 5px solid #996699;
    box-sizing: border-box;
    margin: 0px 0px 0px -10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export default Progress;