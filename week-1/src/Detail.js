import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Action Crators 불러오기
import { deleteBucket, updateBucket } from './redux/modules/bucket';

const Detail = (props) => {
    const bucket_list = useSelector((state) => state.bucket.list);
    const bucket_index = parseInt(props.match.params.index);
    
    const dispatch = useDispatch();

    console.log(bucket_list, props);

    return (
        <div>
            <h1>{bucket_list[bucket_index].text}</h1>
            <button onClick={() => {
                dispatch(deleteBucket(bucket_index));
                props.history.goBack();
            }}>삭제하기</button>
            <button onClick={() => {
                dispatch(updateBucket(bucket_index));
                props.history.goBack();
            }}>완료하기</button>
        </div>
    );
}

export default Detail;