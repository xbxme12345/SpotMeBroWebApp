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


  // Get elements' reference. Later use .value
  // Did not work if I used .value here
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
    // error messages include email already in use and improper email entered
    promise.catch(e => console.log(e.message));
  });

  // add a real time listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      // if proper user logged in, get their hashed id, pass it through
      // URL as variable uidPERM, and redirect to mainpage.html
      var uidPERM = firebaseUser.uid;
      window.location = "mainpage.html?uidPerm="+uidPERM;
      document.getElementById("h1id").innerHTML = uidPERM;
    } else {
      console.log('not logged in');
    }
  })

  document.getElementById("txtPassword").addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode === 13) {
      document.getElementById("btnLogin").click();
    }
  });

} ());
