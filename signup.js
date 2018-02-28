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


  // Get elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const txtPassword2 = document.getElementById("txtPassword2");
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
    if( txtPassword == txtPassword2)
    {
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    }
    else
    {
      console.log('passwords don't match');
    }
    
  });



  // reference to save data must be set globally
  var fbRef = firebase.database().ref().child('Users');


  // add a real time listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var uidPERM = firebaseUser.uid;

      fbRef.child(uidPERM).set({
        // using .value only works here not at var initialization
        Answer: secA.value,
        Email: txtEmail.value,
        Gender: gender.value,
        Security: secQ.value,
        });


        fbRef.child(uidPERM).child("Preferences").set({
          // using .value only works here not at var initialization
          Preferred_Gender: prefgen.value,
          Style: liftStyle.value
        });


      window.location = "mainpage.html?uidPerm="+uidPERM;
      document.getElementById("mainpageh1").innerHTML = uidPERM;
    } else {
      console.log('not logged in');
    }
  })


} ());
