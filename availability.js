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



  /*
    page is not connecting to html, not sure why
    check closing brackets and paranthesis

    ANSWER: can't have multiple js files with db config for one html
  */



  const btnSubmit = document.getElementById("btnSubmit");
  const day = document.getElementById("daysOfWeek");
  const hour = document.getElementById("hour");
  const ampm = document.getElementById("timeOfDay");

  // reference to save data must be set globally
  var fbRef = firebase.database().ref().child('Users');
  var fbRefAvail = firebase.database().ref();


  btnSubmit.addEventListener('click', e => {


	  // make same as mobile app

    /* can't use hour.value because it will change the value in dropdown box,
       if out of range it will be blank,
       need to create new variable */


    // var.value are stored as strings, this cause comparison problems
    var hourMT = parseInt(hour.value);


	  if(ampm.value == "PM") {

		  switch(hourMT) {

		      case 1:
		          hourMT = 13;
		          break;

		      case 2:
		          hourMT = 14;
		          break;

		      case 3:
		          hourMT = 15;
		          break;

		      case 4:
		          hourMT = 16;
		          break;

		      case 5:
		          hourMT = 17;
		          break;

		      case 6:
		          hourMT = 18;
		          break;

		      case 7:
		          hourMT = 19;
		          break;

		      case 8:
		          hourMT = 20;
		          break;

		      case 9:
		          hourMT = 21;
		          break;

		      case 10:
		          hourMT = 22;
		          break;

		      case 11:
		          hourMT = 23;
		          break;
		  }

      console.log(day.value + " " + hour.value + " " + ampm.value);
      console.log("hourMT is equal to " + hourMT);

	  }


    var user = firebase.auth().currentUser;
    var userEmail = user.email;
    var userId = user.uid;


    // MUST FIX!
    /* style and gender are being declared outside of the snapshot but can't be accessed */
    var style;
    var gender;

    firebase.database().ref().child('Users').child(userId).once('value').then(function(snapshot) {

        /* issues accessing these snap values outside of block,
        quick work around is to do all data processing inside func block */
        style = snapshot.val().Preferences.Style;
        gender = snapshot.val().Gender;

        // creates the new availability entry
        fbRefAvail.child(day.value).child(hourMT).child(userId).set({
          Gender: gender,
          Style: style,
          Email: userEmail
        });
        alert("Availability has been entered for " + day.value + " " + hour.value + ampm.value + " (" + hourMT + ")");
      });
      // cannot access snap values outside of brackets even if declared outside block


	}); // end of button listener



} ());
