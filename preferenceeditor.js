(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAK7odv2vBxJdDMThZHkBjoNdsypVNDGDU",
    authDomain: "spotmebro-82458.firebaseapp.com",
    databaseURL: "https://spotmebro-82458.firebaseio.com",
    projectId: "spotmebro-82458",
    storageBucket: "spotmebro-82458.appspot.com",
    messagingSenderId: "737240148087"
  };
  firebase.initializeApp(config);



  const btnSubmitPref = document.getElementById("submitPref");

  var fbRef = firebase.database().ref().child('Users');


  btnSubmitPref.addEventListener('click', e => {
    
  });



  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {



    } else {
      // also onclick functions for logout button in html file
      console.log('not logged in');
      window.location = "signin.html";
    }
  });

  /*firebase.auth().signOut(firebaseUser =>{
    console.log("Signed Out");
    )
  });*/

} ());
