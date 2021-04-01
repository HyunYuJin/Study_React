import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// Action Crators 불러오기
import { deleteBucketFB, updateBucketFB } from './redux/modules/bucket';

const Detail = (props) => {
    const bucket_list = useSelector((state) => state.bucket.list);
    const bucket_index = parseInt(props.match.params.index);
    
    const dispatch = useDispatch();

    console.log(bucket_list, props);

    return (
        <DetailContainer>
            <h1>{bucket_list[bucket_index].text}</h1>
            <button onClick={() => {
                dispatch(deleteBucketFB(bucket_index));
                props.history.goBack();
            }}>삭제하기</button>
            <button onClick={() => {
                dispatch(updateBucketFB(bucket_index));
                props.history.goBack();
            }}>완료하기</button>
        </DetailContainer>
    );
}

const DetailContainer = styled.div`
    height: 100%;

    & > * {
        padding: 5px;
    }
    & button {
        width: 50%;
        color: #fff;
        border: 1px solid #996699;
        background-color: #996699;
        border: 1px solid #FFF;
        box-sizing: border-box;
    }
`;

export default Detail;