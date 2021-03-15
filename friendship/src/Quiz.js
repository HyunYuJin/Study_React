import React from 'react';
import styled from 'styled-components';
// import img from './assets/scc_img01.png';
// import TinderCard from 'react-tinder-card';
import SwipeItem from './SwipeItem';

const Quiz = (props) => {
    const [num, setNum] = React.useState(0);

    const onSwipe = (direction) => {
        console.log("You swiped: " + direction);
        setNum(num + 1);
    };

    return (
        <QuizContainer>
            <p>
                <span>{num + 1}번 문제</span>
            </p>
            {props.list.map((value, index) => {
                if (num === index) {
                    return (
                        <Question key={index}>{value.question}</Question>
                    )
                }
            })}

            <AnswerZone>
                <Answer>o</Answer>
                <Answer>x</Answer>
            </AnswerZone>

            {props.list.map((value, index) => {
                if (num === index) {
                    return (
                        // <DragItem key={index}>
                        //     <TinderCard onSwipe={onSwipe}>
                        //         <img src={img} alt="미더덕" />
                        //     </TinderCard>
                        // </DragItem>
                        <SwipeItem key={index} onSwipe={onSwipe} />
                    );
                }
            })}
        </QuizContainer>
    );
}

const QuizContainer = styled.div`
    width: 100%;
    text-align: center;

    & > p > span {
        padding: 8px 16px;
        background-color: #fef5d4;
        border-radius: 30px;
    }
`;

const Question = styled.h1`
    font-size: 1.5em;
`;

const AnswerZone = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const Answer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10em;
    font-weight: 600;
    color: #f1c32ab9;
`;

// const DragItem = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 10;

//     & > div {
//         background-color: #ffd6aa;
//         border-radius: 150px;
//     }

//     & img {
//         max-width: 150px;
//     }
// `;

export default Quiz;