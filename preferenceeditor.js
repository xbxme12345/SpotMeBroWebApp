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
  const new_prefGen = document.getElementById("prefgender");
  const new_style = document.getElementById("prefStyle");

  var fbRef = firebase.database().ref().child('Users');

  btnSubmitPref.addEventListener('click', e => {
    var userId = firebase.auth().currentUser.uid;

    // creates the new subset of data, Preferences, for previous entry
    fbRef.child(userId).child("Preferences").set({
      // unlike mobile app, cannot have space between key's name
      Preferred_Gender: new_prefGen.value,
      Style: new_style.value
    });
    alert("preferences have been updated to \'" + new_prefGen.value + "\' and \'" + new_style.value + "\'");
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
    } else {
      // also onclick functions for logout button in html file
      console.log('not logged in');
      window.location = "signin.html";
    }
  });
} ());
