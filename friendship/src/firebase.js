import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    // config
    apiKey: "AIzaSyC1XlH1mP0WQc0YFmN1xELPZ1bTQp0DPYU",
    authDomain: "friendship-69ce2.firebaseapp.com",
    projectId: "friendship-69ce2",
    storageBucket: "friendship-69ce2.appspot.com",
    messagingSenderId: "627951814762",
    appId: "1:627951814762:web:78dcbe0a7e9612ff482213",
    measurementId: "G-34LSF8B6KX"
};

firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

export { firestore };