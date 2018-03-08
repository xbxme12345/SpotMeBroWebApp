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

  var availString = "";




  firebase.auth().onAuthStateChanged(user => {
    if(user){

      var uidPERM = user.uid;
      var availInFb;



      // still can't get access to outside of block
      fbRef.child(user.uid).child("Availability").on("value", function(snapshot) {
        availString = snapshot.val();

        //console.log(availString);

        var str = availString.split(",");
        str.pop(); // to remove empty end entry because there is an extra comma at end
        var len = str.length;

        /* implement sorting algo to put in day of week order then chrono order */


        for (var i = 0; i < len; i++) {

          if (i == 0) {
            document.getElementById("availP").innerHTML += "<ul></br>";
          }

          document.getElementById("availP").innerHTML += "<li" + " class=\"availEntries\" id=\"item" + i + "\" onclick=\"deleteEntry(" + i + ")\">" + str[i] + "</li></br>";
        }
        document.getElementById("availP").innerHTML += "</ul>";



      });

    }
  })

  /* Everytime page loads need to retreive the current Availability string in database, availInFb,
    and assign it to availString to maintain data flow or else everytime the loads loads it will be wiped */





  btnSubmit.addEventListener('click', e => {


	  // make same as mobile app

    /* can't use hour.value because it will change the value in dropdown box,
       if out of range it will be blank,
       need to create new variable */


    // var.value are stored as strings, this cause comparison problems
    var hourMT = parseInt(hour.value);


    if (ampm.value == "AM" && hourMT == 12) {
      hourMT = 0;
    } else if(ampm.value == "PM") {

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

      //console.log(day.value + " " + hour.value + " " + ampm.value);
      //console.log("hourMT is equal to " + hourMT);

	  }


    var user = firebase.auth().currentUser;
    var userEmail = user.email;
    var userId = user.uid;

    availString += day.value + " " + hourMT + ", ";



    var style;
    var gender;

    firebase.database().ref().child('Users').child(userId).once('value').then(function(snapshot) {

        /* issues accessing these snap values outside of block,
        quick work around is to do all data processing inside func block */
        style = snapshot.val().Preferences.Style;
        gender = snapshot.val().Gender;

        // creates the new availability entry by day of week
        fbRefAvail.child(day.value).child(hourMT).child(userId).set({
          Gender: gender,
          Style: style,
          Email: userEmail
        });



        /* says null right before first entry MUST FIX! */
        // update availability in db under uid
        fbRef.child(userId).update({
          Availability: availString
        });



        //alert("Availability has been entered for " + day.value + " " + hour.value + ampm.value + " (" + hourMT + ")");
        //console.log(availString);
      });
      // cannot access snap values outside of brackets even if declared outside block

      // need to do this to "reset" listing or else would be redundant
      document.getElementById("availP").innerHTML = "";

	}); // end of button listener



} ());
