import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

        apiKey: "AIzaSyDRrUXzbpr6wHeWoI2jg-rMIuFeVOZjB0k",
        authDomain: "class-test-87374.firebaseapp.com",
        databaseURL: "https://class-test-87374-default-rtdb.firebaseio.com",
        projectId: "class-test-87374",
        storageBucket: "class-test-87374.appspot.com",
        messagingSenderId: "426110625217",
        appId: "1:426110625217:web:41db0a840bb2101d483b40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();