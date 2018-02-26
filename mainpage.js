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
      console.log('not logged in');
      window.location = "signin.html";
    }
  });







  /*
  // add a real time listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var uidPERM = firebaseUser.uid; // this is correct!!!
      //alert("uidPERM is: " + uidPERM);
      //console.log(firebaseUser.uid);
      window.location = "testPage.html?uidPerm="+uidPERM;
      document.getElementById("h1id").innerHTML = uidPERM;
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  }) */


} ());
