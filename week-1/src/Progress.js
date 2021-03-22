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
        </ProgressBar>
    );
}

const ProgressBar = styled.div`
    background-color: #eee;
    width: 100%;
    height: 40px;
`;

const Highlight = styled.div`
background-color: orange;
height: 100%;
width: ${props => props.width};
transition: width 1s;
`;
// width라는 속성이 변했을 때 1초 동안 변화 속도를 정해준다.

export default Progress;