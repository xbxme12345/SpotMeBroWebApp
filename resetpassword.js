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

    var email_val;
    var securityQuestion_val;
    var securityAnswer_val;

    var emailInput = document.getElementById("submitEmail").value;
    var answerInput = document.getElementById("submitSecurityAnswer").value;

    btnSubmitEmail.addEventListener('click', e => {
      var queryEmail = firebase.database().ref().child('Users');
      queryEmail.once('value', function (snap){
        snap.forEach(function (childSnap){
          console.log('user', childSnap.val());
        });
      });
      /*
      queryEmail.once("value").then(function(snapshot)){
        snapshot.forEach(function(childSnapshot)){
          var key = childSnapshot.key;
          var childData = childSnapshot.val();

          email_val = childSnapshot.val().Email;
          securityQuestion_val = childSnapshot.val().Security;
          securityAnswer_val = childSnapshot.val().Answer;
        }
      }

      if(emailInput == email_val){
        document.getElementById("securityQuestion").innerHTML += securityQuestion_val;
      }
      else{
        alert("This email does not exist!");
      }*/
    })

    btnResetPasswordSubmit.addEventListener('click', e => {
      if(answerInput == securityAnswer_val){
        firebase.auth().sendPasswordResetEmail('email_val', actionCodeSettings).then(function() {
          alert("Password reset email sent!");
        })
        catch(function(error){
          alert("An error has occurred!");
        });
      }
      else{
        alert("Incorrect security question answer!");
      }
    })
} ());
