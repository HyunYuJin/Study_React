// rank.js

// Action
const ADD_USER_NAME = "rank/ADD_USER_NAME";
const ADD_RANK = "rank/ADD_RANK";
const GET_RANK = "rank/GET_RANK";

const initialState = {
    user_name: "",
    ranking: []
}

// Action Creators
export const addUserName = (user_name)  => {
    return { type: ADD_USER_NAME, user_name };
}

export const addRank = (rank_info) => {
    return { type: ADD_RANK, rank_info };
}

export const getRank = (ranking_list) => {
    return { type: GET_RANK, ranking_list };
}

// Reducer
export default function rank(state = initialState, action = {}) {
    switch (action.type) {
        case "rank/ADD_USER_NAME":
            return { ...state, user_name: action.user_name };

        case "rank/ADD_RANK":
            return { ...state, ranking: [...state.ranking, action.rank_info] };

        case "rank/GET_RANK":
            return { ...state, ranking: action.ranking_list };

        default:
            return state;
    }
}