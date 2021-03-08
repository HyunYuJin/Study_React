// 리액트 패키지를 불러오기
import React from 'react'; 

// 함수형 컴포넌트 사용방식
// function Bucketlist(props){
//     return (
//         <div>버킷 리스트</div>
//     );
// }

// () 안에 props는 부모 컴포넌트에게 받아온 데이터
// js 함수가 값을 받아오는 것과 동일한 방식이다!
// const BucketList = (props) => {
    // console.log(props); // state 값이 잘 넘어오는지 확인
const BucketList = ({ list }) => {
    const my_lists = list;

    // 컴포넌트가 뿌려줄 리엑트 엘리먼트를 반환한다.
    return (
        <div>
            {
                my_lists.map((list, index) => {
                    // console.log(list);
                    return (<div key={ index }>{ list }</div>);
                })
            }
        </div>
    );
}

export default BucketList;