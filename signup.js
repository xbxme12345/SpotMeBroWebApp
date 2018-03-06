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
  const txtPassword2 = document.getElementById("txtConfirmPassword");
  const gender = document.getElementById("gender");
  const secQ = document.getElementById("securityQuestion");
  const secA = document.getElementById("securityAnswer");
  const liftStyle = document.getElementById("style");
  const prefgen = document.getElementById("prefgender");
  const btnSignUp = document.getElementById("btnSignUp");


  // add sign up event
  btnSignUp.addEventListener('click', e => {
    // get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // sign in
    if( txtPassword.value == txtPassword2.value)
    {
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    }
    else
    {
      console.log('passwords don\'t match');
    }

  });



  // reference to save data must be set globally
  var fbRef = firebase.database().ref().child('Users');


  // add a real time listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {

      /* using .value only works here not at var initialization */
      var uidPERM = firebaseUser.uid;

      fbRef.child(uidPERM).set({
        Answer: secA.value,
        Email: txtEmail.value,
        Gender: gender.value,
        Security: secQ.value,
      });

      // creates the new subset of data, Preferences, for previous entry
      fbRef.child(uidPERM).child("Preferences").set({
        // unlike mobile app, cannot have space between key's name
        Preferred_Gender: prefgen.value,
        Style: liftStyle.value
      });

      // passes hashed id as variable in URL
      window.location = "mainpage.html?uidPerm="+uidPERM;
    } else {
      console.log('not logged in');
    }
  })


} ());
