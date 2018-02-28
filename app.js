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
      that can be reused plenty of times throughout app */



  // Get elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");


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


  // add sign up event
  btnSignUp.addEventListener('click', e => {
    // get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });




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
    }
  })


} ());
