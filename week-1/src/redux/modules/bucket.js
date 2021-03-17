// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";

const initialState = {
    list: ['자가용 장만하기', '스카이 다이빙', '인생 최종목표 알지?']
}

// Action Creators
export const loadBucket = () => {
    return { type: LOAD };
}

export const createBucket = (bucket) => { // input에서 입력한 새로운 text는 bucket으로 넘어온다.
    return { type: CREATE, bucket };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/LOAD":
            return state;

        case "bucket/CREATE":
            const new_bucket_list = [...state.list, action.bucket];
            return { list: new_bucket_list };

        default:
            return state;
    }
  }
  