// rank.js

// Action
const ADD_USER_NAME = "rank/ADD_USER_NAME";
const ADD_USER_MESSAGE = "rank/ADD_USER_MESSAGE";
const ADD_RANK = "rank/ADD_RANK";
const GET_RANK = "rank/GET_RANK";

const initialState = {
    user_name: "",
    ranking: [
        { score: 40, name: "짱아찌", message: "안녕 미더덕!" },
    ],
    user_score: "",
    score_text: {
        60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
        80: "우와! 우리는 엄청 가까운 사이!",
        100: "둘도 없는 단짝이에요! :)",
    }
}

// Action Creators
export const addUserName = (user_name)  => {
    return { type: ADD_USER_NAME, user_name };
};

export const addUserMessage = (user_message) => {
    return { type: ADD_USER_MESSAGE, user_message };
};

export const addRank = (rank_info) => {
    return { type: ADD_RANK, rank_info };
};

export const getRank = (ranking_list) => {
    return { type: GET_RANK, ranking_list };
};

// Reducer
export default function rank(state = initialState, action = {}) {
    switch (action.type) {
        case "rank/ADD_USER_NAME": {
            return { ...state, user_name: action.user_name };
        }

        case "rank/ADD_USER_MESSAGE": {
            return { ...state, user_message: action.user_message };
        }

        case "rank/ADD_RANK": {
            return { ...state, ranking: [...state.ranking, action.rank_info] };
        }

        case "rank/GET_RANK": {
            return { ...state, ranking: action.ranking_list };
        }
        
        default:
            return state;
    }
}