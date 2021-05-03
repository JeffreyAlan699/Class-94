//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCrDIBn-oTfNShiEXQvFnOIiL2o7Zg90AI",
    authDomain: "class-94-e20b0.firebaseapp.com",
    databaseURL: "https://class-94-e20b0-default-rtdb.firebaseio.com",
    projectId: "class-94-e20b0",
    storageBucket: "class-94-e20b0.appspot.com",
    messagingSenderId: "489555332524",
    appId: "1:489555332524:web:58fced1c2010aa53347e09",
    measurementId: "G-TX9PWL2P6L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "add_purpose"
    }
    )
}