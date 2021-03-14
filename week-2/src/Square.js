import React from 'react';

const Square = () => {
    // setCount는 count를 변경해줄 함수로 사용
    // useState(초기값)
    const [count, setCount] = React.useState(3);

    const addSquare = () => {
        setCount(count + 1);
        console.log("[Function] Add Square!");
    }

    const removeSquare = () => {
        setCount(count > 0 ? count - 1 : 0);
        console.log("[Function] Remove Square!");
    }

    const square_count = Array.from({ length: count }, (value, index) => (index));
    return(
        <div className="square">
          <h3>Function 방식 State 관리</h3>
          {square_count.map((val, idx) => {
            return (
                <div 
                  key={idx}
                  style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "#AAA",
                    padding: "10px",
                    margin: "10px"
                  }}>사각형</div>
            )
          })}
          <button onClick={addSquare}>Add Square</button>
          <button onClick={removeSquare}>Remove Square</button>
        </div>
    );
}

export default Square;