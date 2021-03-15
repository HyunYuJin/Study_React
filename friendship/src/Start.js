import React from 'react';
import img from './assets/scc_img01.png';

const Start = (props) => {
    return (
        <div className="outter">
            <img className="scc-img" src={img} alt="미더덕" />
            <h1>나는 <span>{props.name}</span>에 대해서 얼마나 알고있을까?</h1>
            <input className="text-box" type="text" placeholder="내 이름" />
            <button className="button">시작하기</button>
        </div>
    )
}

export default Start;