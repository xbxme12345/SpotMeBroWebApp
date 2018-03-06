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

  //Login event listener
  btnLogin.addEventListener('click', e => {
    //Get Email and password
    const email = txtEmail.value;
    const password = textPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  })

  //Signup event listener
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
    const auth = firebase.auth();

    //Signup
    if(password == confirmPassword){
      const promise = auth.createUserWithEmailAndPassword(email, password);
      promise.catch(e => console.log(e.message));
    } else {
      alert("Passwords do not match.");
      console.log("Passwords do not match. Try again.");
    }
  });

  //Signout event listener
  btnSignOut.addEventListener('click', e => {
    firebase.auth().signOut();
  })

  //Add Reset Password event listener: (Version #1)
  //Submitting your email
  window.onload = function(){
    const btnEmail = document.getElementById("btnSubmitEmail");
    btnEmail.addEventListener('click', e =>{
      const fbEmail = user.email;
      const subEmail = submitEmail.value;

      if(checkEmail(subEmail) == true){
        var fbSecurityQ = user.security;
        document.getElementById("securityQuestion").innerHTML = fbSecurityQ;
      }
      else {
        alert(subEmail + "does not exist");
      }
    });
  }

  //Event listener when submit email for password reset is clicked
  //(Version #2)
  btnEmail.addEventListener('click', function(){
    const fbEmail = user.email;
    const subEmail = submitEmail.value;
    const fbSecurityQ = user.Security;

    const subAnswer = submitSecurityAnswer.value;
    const fbSecurityA = user.Answer;

    if (checkEmail(fbEmail, subEmail) == true){
      //If provided email is correct:
      //Post the user's security question to answer
      document.getElementById("securityQuestion").innerHTML = fbSecurityQ;

      //Event listener when submit reset password is clicked
      btnResetPasswordSubmit.addEventListener('click', function(){
        if(checkAnswer(fbSecurityA, subAnswer) == true){
          //If security answer is correct:
          //Sent reset password email to user

        }
      })
    } else {

    }
  })

  //Function to check if user's submitted email matches
  //with the user's email stored in firebase
  function checkEmail(fbEmail, subEmail){
    if(fbEmail == subEmail){
      return true;
    }
    else{
      return false;
    }
  }

  //Function to check if the user's submitted security question
  //answer matches with the answer stored in firebase
  function checkAnswer(fbAnswer, subAnswer){
    if(fbAnswer == subAnswer){
      return true;
    }
    else {
      return false;
    }
  }

  /*btnSubmitEmail.addEventListener('click', e => {
    const fbEmail = user.email;
    const subEmail = submitEmail.value;

    if(subEmail == fbEmail){
      var fbSecurityQ = user.security;
      document.getElementById("securityQuestion").innerHTML = fbSecurityQ;
    }
    else {
      alert(subEmail + "does not exist");
    }

    ref.on("value", getData, errData);

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

  })*/

  //Realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
    } else {
      console.log("not logged in");
    }
  })

  //Realtime listener
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
