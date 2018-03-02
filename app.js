(function() {
  //****************************
  //DISREGARD THIS APP.JS DOCUMENT ATM, CURRENTLY
  //USING MAINPAGE.JS FOR ALL OF THE OTHER PAGES
  //IN ORDER TO BE ABLE TO LOG OUT
  //*****************************

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

  var fbRef = firebase.database().ref().child("Users");

  // Get elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");
  const btnReset = document.getElementById("btnReset");

  //Elements in signup page
  const txtConfirmPassword = document.getElementById("txtConfirmPassword");
  const genderSelect = document.getElementById("Gender");
  const securityQuestionSelect = document.getElementById("securityQuestion");
  const txtSecurityAnswer = document.getElementById("securityAnswer");
  const styleSelect = document.getElementById("style");
  const prefGenderSelect = document.getElementById("prefgender");

  //Signout button element for every page
  const btnSignOut = document.getElementById("btnSignOut");

  //Reset password button element for resetpassword.html
  const btnSubmitEmail = document.getElementById("btnSubmitEmail");
  const submitEmail = document.getElementById("submitEmail");

  const submitAnswer = document.getElementById("submitSecurityAnswer");
  const resetPasswod = document.getElementById("btnResetPasswordSubmit");

  //Add login event
  btnLogin.addEventListener('click', e => {
    //Get Email and password
    const email = txtEmail.value;
    const password = textPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  })

  //Add Signup event
  btnSignUp.addEventListener('click', e => {
    //Get signup information
    const email = txtEmail.value;
    const password = txtPassword.value;
    const confirmPassword = txtConfirmPassword.value;
    const gender = genderSelect.value;
    const securityQuestion = securityQuestionSelect.value;
    const securityAnswer = txtSecurityAnswer.value;
    const style = styleSelect.value;
    const prefGender = prefGenderSelect.value;

    //Signup
    if(password == confirmPassword){

    } else {
      alert("Passwords do not match.");
      console.log("Passwords do not match. Try again.");
    }
  });

  //Add Signout event
  btnSignOut.addEventListener('click', e => {
    firebase.auth().signOut();
  })

  //Add Reset Password event:
  //Submitting your email
  btnSubmitEmail.addEventListener('click', e => {
    const fbEmail = user.email;
    const subEmail = submitEmail.value;

    if(subEmail == fbEmail){
      var fbSecurityQ = user.security;
      document.getElementById("securityQuestion").innerHTML = fbSecurityQ;
    }
    else {
      alert(subEmail + "does not exist");
    }

    /*ref.on("value", getData, errData);

    function getData(data){
      console.log(data.val());
      var email = data.val();
      var keys = Object.keys(email);
      console.log(keys);
      for(var i=0; i<keys.length; i++){
        var k = keys[i];
        var
      }
    }

    function errData(err) {
      console.log("Error" + err);
    }*/

    /*firebase.auth().sendPasswordResetEmail(subEmail).then(function() {
      alert("Reset Password Email Sent!");
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode == "auth/invalid-email") {
        alert(errorMessage);
      } else if (errorCode == "auth/user-not-found") {
        alert(errorMessage);
      }
    })
    */
  })

  btnSubmit

  //Add realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
    } else {
      console.log("not logged in");
    }
  })


  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      // if proper user logged in, get their hashed id, pass it through
      // URL as variable uidPERM, and redirect to mainpage.html
      var uidPERM = firebaseUser.uid;
      window.location = "mainpage.html?uidPerm="+uidPERM;
      document.getElementById("h1id").innerHTML = uidPERM;
    } else {
      console.log('not logged in');
      window.location = "signin.html";
    }
  })


} ());
