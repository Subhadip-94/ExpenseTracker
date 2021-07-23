import firebase from 'firebase';

const config = {

    apiKey: "AIzaSyB4C40HmeI4GdR9puIa9a_3buu2b2biQ3s",
    authDomain: "expensetracker-bf51d.firebaseapp.com",
    projectId: "expensetracker-bf51d",
    databaseURL: "https://expensetracker-bf51d-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "expensetracker-bf51d.appspot.com",
    messagingSenderId: "607638735278",
    appId: "1:607638735278:web:4bc0f4c23d7908c1b0a03f"

};

const fire = firebase.initializeApp(config);
export default fire;