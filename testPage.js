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


  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    window.location = "signin.html";
  });


  // add a real time listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var uidPERM = firebaseUser.uid; // this is correct!!!
      //alert("uidPERM is: " + uidPERM);
      //console.log(firebaseUser.uid);
    } else {
      console.log('not logged in');
      window.location = "signin.html";
    }
  })


} ());
