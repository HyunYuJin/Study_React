import React from 'react';
import img from "./scc_img01.png";

const Start = (props) => {
    const start = props.name;

    return (
        <div className="container">
            <div className="outter">
                <img src={img} className="scc-img" />
                <h1 style={{ fontSize: "1.5em", margin: "0px", lineHeight: "1.4" }}>
                    나는 <span style={{ backgroundColor: "#fef5d4", padding: "5px 10px", borderRadius: "30px" }}>{start}</span>에 대해 얼마나 알고 있을까?
                </h1>
                <input type="text" placeholder="내 이름" className="text-box" />
                <button className="button">시작하기</button>
            </div>
        </div>
    )
}

export default Start;