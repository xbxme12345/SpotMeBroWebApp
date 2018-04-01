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

  const new_prefGen = document.getElementById("prefgender");
  const new_style = document.getElementById("prefStyle");

  var fbRef = firebase.database().ref().child('Users');

  var currentUserId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/Users/' + currentUserId + '/Preferences').once('value').then(function(snapshot){
    var current_prefGen = snapshot.val().Preferred_Gender;
    var current_style = snapshot.val().Style;
    //Setting the select option placeholder value to be the pre-selected preferences value by the user
    document.getElementById(current_prefGen).selected = "true";
    document.getElementById(current_style).selected = "true";
    console.log(current_prefGen);
    console.log(current_style);
  })

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
    } else {
      // also onclick functions for logout button in html file
      console.log('not logged in');
      window.location = "signin.html";
    }
  });
} ());
