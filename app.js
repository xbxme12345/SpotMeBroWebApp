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


  /* This page is not being used currently but contains plenty of code
    that can be reused throughout app */



  // Get elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");

  const fbRef = firebase.database().ref().child('Users');

  // Add login event
  btnLogin.addEventListener('click', e => {
    // get email and pass
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });



  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      // if proper user logged in, get their hashed id, pass it through
      // URL as variable uidPERM, and redirect to mainpage.html
      var currentUser = firebaseUser.uid;
      var gender = fbRef.child(uidPERM).child("Gender").val();
      var pref_gender = fbRef.child(uidPERM).child("Preferences").child("Preferred_Gender").val();
      var style = fbRef.child(uidPERM).child("Preferences").child("Style").val();
    } else {
      console.log('not logged in');
      window.location = "signin.html";
    }
  })


} ());
