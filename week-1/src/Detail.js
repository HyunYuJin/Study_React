import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Detail = (props) => {
    const bucket_list = useSelector((state) => state.bucket.list);
    const bucket_index = parseInt(props.match.params.index);

    console.log(bucket_list, props);
    
    return (
        <h1>{bucket_list[bucket_index]}</h1>
    );
}

export default Detail;