// 리액트 패키지를 불러오기
import React from 'react'; 

const BucketList = ({ list }) => {
    const my_lists = list;
    return (
        <div className="lists">
            {
                my_lists.map((list, index) => {
                    return (<div key={ index } className="list-item">{ list }</div>);
                })
            }
        </div>
    );
}

export default BucketList;