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

  var fbRef = firebase.database().ref().child('Users');




  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var currentUser = firebaseUser.uid;
	  var gender = fbRef.child(uidPERM).child("Gender").val();
	  var pref_gender = fbRef.child(uidPERM).child("Preferences").child("Preffered_Gender").val();
	  var style = fbRef.child(uidPERM).child("Preferences").child("Style").val();
	  //assign as global vars

    } else {
      // also onclick functions for logout button in html file
      console.log('not logged in');
      window.location = "signin.html";
    }
  });


} ());
