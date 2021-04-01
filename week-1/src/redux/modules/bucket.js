// bucket.js

// firestore 객체 가져오기
import { firestore } from '../../firebase';

const bucket_db = firestore.collection("bucket");

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";
const LOADED = "bucket/LOADED";

const initialState = {
    is_loaded: true,
    list: [
        { text: '자가용 장만하기', completed: false },
        { text: '스카이 다이빙', completed: false },
        { text: '인생 최종목표 알지?', completed: false }
    ]
}

// Action Creators
export const loadBucket = (bucket) => {
    return { type: LOAD, bucket };
}

export const createBucket = (bucket) => { // input에서 입력한 새로운 text는 bucket으로 넘어온다.
    return { type: CREATE, bucket };
}

export const updateBucket = (bucket_index) => {
    return { type: UPDATE, bucket_index }
}

export const deleteBucket = (bucket_index) => {
    return { type: DELETE, bucket_index }
}

export const isLoaded = (loaded) => {
    return { type: LOADED, loaded }
}


// 파이어베이스랑 통신하는 부분
export const loadBucketFB = () => {
    return function (dispatch) {
      
        bucket_db.get().then((docs) => {
            let bucket_data = [];
            docs.forEach((doc) => {
                if (doc.exists) {
                    bucket_data = [...bucket_data, {id: doc.id, ...doc.data()}];
                }
            });
  
            // 이제 액션 생성 함수한테 가져온 데이터를 넘겨준당
            dispatch(loadBucket(bucket_data));
        }).catch((error) => {
            console.log("loadBucketFB Error: ", error);
        });
    };
};

export const addBucketFB = (bucket) => {
    return function (dispatch) {
        dispatch(isLoaded(true));

        let bucket_data = { text: bucket, completed: false };

        bucket_db.add(bucket_data).then((docRef) => {
            bucket_data = { ...bucket_data, id: docRef.id };
            dispatch(createBucket(bucket_data));
            dispatch(isLoaded(false));
        }).catch((error) => {
            console.log("addBucketFB Error: ", error);
            dispatch(isLoaded(false));
        });
    }
}

export const updateBucketFB = (index) => {
    return function (dispatch, getState) {
        dispatch(isLoaded(true));

        // store에 저장된 state 정보들을 가지고 온다.
        // bucket 안에 list라는 state의 index 값을 가지고 온다.
        let _bucket_data = getState().bucket.list[index];

        let bucket_data = { ..._bucket_data, completed: true };
        if (!bucket_data.id) {
            return;
        }

        bucket_db.doc(_bucket_data.id).update(bucket_data).then((docRef) => {
            dispatch(updateBucket(index));
            dispatch(isLoaded(false));
        }).catch((error) => {
            console.log("updateBucketFB Error: ", error);
            dispatch(isLoaded(false));
        });
    }
}

export const deleteBucketFB = (index) => {
    return function (dispatch, getState) {
        dispatch(isLoaded(true));
        
        let _bucket_data = getState().bucket.list[index];

        if (!_bucket_data.id) {
            return;
        }

        bucket_db.doc(_bucket_data.id).delete().then((docRef) => {
            dispatch(deleteBucket(index));
            dispatch(isLoaded(false));
        }).catch((error) => {
            console.log("deleteBucketFB Error: ", error);
            dispatch(isLoaded(false));
        });
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/LOAD": {
            if (action.bucket.length >= 0) {
                return { list: action.bucket, is_loaded: false };
            }
            return state;
        }

        case "bucket/CREATE": {
            const new_bucket_list = [...state.list, action.bucket];
            return { ...state, list: new_bucket_list };
        }

        case "bucket/UPDATE": {
            const bucket_update = state.list.map((value, index) => {
                if (index === action.bucket_index) {
                    return { ...value, completed: true };
                } else {
                    return value;
                }
            });
            return { list: bucket_update };
        }

        case "bucket/DELETE": {
            const bucket_list = state.list.filter((value, index) => {
                if (index !== action.bucket_index) return value;
            });
            return { list: bucket_list };
        }

        case "bucket/LOADED": {
            return { ...state, is_loaded: action.loaded };
        }

        default:
            return state;
    }
  }
  