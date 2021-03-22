// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";

const initialState = {
    list: [
        { text: '자가용 장만하기', completed: false },
        { text: '스카이 다이빙', completed: false },
        { text: '인생 최종목표 알지?', completed: false }
    ]
}

// Action Creators
export const loadBucket = () => {
    return { type: LOAD };
}

export const createBucket = (bucket) => { // input에서 입력한 새로운 text는 bucket으로 넘어온다.
    return { type: CREATE, bucket };
}

export const deleteBucket = (bucket_index) => {
    return { type: DELETE, bucket_index }
}

export const updateBucket = (bucket_index) => {
    return { type: UPDATE, bucket_index }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/LOAD":
            return state;

        case "bucket/CREATE":
            const new_bucket_list = [...state.list, { text: action.bucket, completed: false }];
            return { list: new_bucket_list };

        case "bucket/DELETE":
            const bucket_list = state.list.filter((value, index) => {
                if (index !== action.bucket_index) {
                    return value;
                }
            });
            return { list: bucket_list }

        case "bucket/UPDATE":
            const bucket_update = state.list.map((value, index) => {
                if (index === action.bucket_index) {
                    return { ... value, completed: true };
                } else {
                    return value;
                }
            });
            return { list: bucket_update };

        default:
            return state;
    }
  }
  