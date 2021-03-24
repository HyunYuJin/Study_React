// firebase를 사용하기 위해 import
import firebase from 'firebase/app';
// firestore를 사용하기 위해 import
import "firebase/firestore";

const firebaseConfig = {
    // config
    apiKey: "AIzaSyCxnW-ORj0oC6yl53lmFX42eMNcSTA9Rh4",
    authDomain: "sparta-react-57ef5.firebaseapp.com",
    projectId: "sparta-react-57ef5",
    storageBucket: "sparta-react-57ef5.appspot.com",
    messagingSenderId: "1035144317794",
    appId: "1:1035144317794:web:ded0b3784a62c63095ba3b",
    measurementId: "G-Z3HWHM7P9Z"
};

firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장한다.
const firestore = firebase.firestore();

export { firestore };