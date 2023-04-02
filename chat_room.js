var firebaseConfig = {
    apiKey: "AIzaSyAQ3k2NDKoFcei2G4pHazK3ntYzm8M6tts",
    authDomain: "kwitter-18628.firebaseapp.com",
    databaseURL: "https://kwitter-18628-default-rtdb.firebaseio.com",
    projectId: "kwitter-18628",
    storageBucket: "kwitter-18628.appspot.com",
    messagingSenderId: "911850441739",
    appId: "1:911850441739:web:6dad919c540a5887884b0e",
    measurementId: "G-GEXDTFKW2V"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name=document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}