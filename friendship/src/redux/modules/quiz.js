// quiz.js

// Action
// 퀴즈 데이터를 가져온다.
const GET_QUIZ = "quiz/GET_QUIZ";
// 유저의 응답을 추가한다.
const ADD_ANSWER = "quiz/ADD_ANSWER";
// 유저의 응답을 초기화 한다.
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
    name: "미더덕",
    score_texts: {
        60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
        80: "우와! 우리는 엄청 가까운 사이!",
        100: "둘도 없는 단짝이에요! :)",
    },
    answers: [],
    quiz: [
        { question: "미더덕은 1살이다.", answer: "O" },
        { question: "미더덕은 2살이다.", answer: "O" },
        { question: "미더덕은 3살이다.", answer: "O" },
        { question: "미더덕은 4살이다.", answer: "O" },
        { question: "미더덕은 5살이다.", answer: "O" }
    ]
}

// Action Creators
export const getQuiz = (quiz_list) => {
    return { type: GET_QUIZ, quiz_list };
}

export const addAnswer = (answer)  => {
    return { type: ADD_ANSWER, answer };
}

export const resetAnswer = () => {
    return { type: RESET_ANSWER };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "quiz/GET_QUIZ":
            return { ...state, quiz: action.quiz_list };

        case "quiz/ADD_ANSWER": 
            const new_quiz_list = [...state.answers, action.answer];
            return { ...state, answers: new_quiz_list };
        
        case "quiz/RESET_ANSWER":
            return { ...state, answers: [] }; 

        default: 
            return state;
    }
}