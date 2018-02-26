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


  const btnSubmit = document.getElementById("btnSubmit");
  const day = document.getElementById("daysOfWeek");
  const hour = document.getElementById("hour");
  const ampm = document.getElementById("timeOfDay");

  var fbRef = firebase.database().ref()
  
  btnSubmit.addEventListener('click', e => 
  {
	  
	  // make same as mobile app
	  if(ampm == pm)
	  {
		  switch(hour) {
		      case 12:
		          hour = 12;
		          break;
		      case 1:
		          hour = 13;
		          break;
		      case 2:
		          hour = 14;
		          break;
		      case 3:
		          hour = 15
		          break;
		      case 4:
		          hour = 16;
		          break;
		      case 5:
		          hour = 17;
		          break;
		      case 6:
		          hour = 18;
		          break;
		      case 7:
		          hour = 19;
		          break;
		      case 8:
		          hour = 20;
		          break;
		      case 9:
		          hour = 21
		          break;
		      case 10:
		          hour = 22;
		          break;
		      case 11:
		          hour = 23;
		          break;
		      
		  }
	  }
	      var uidPERM = firebaseUser.uid;
		  
		  var availabilities = fbRef.child(uidPERM).child("Availability").val()
		  var availabilities = availabilities + "," + day + " " + hour + " " + ampm + " ";
		  fbRef.child(uidPERM).child("Availability").updates(availabilities);
	      fbRef.child(day).child(hour).child(uidPERM).set({
	        // using .value only works here not at var initialization
	        Email: txtEmail.value,
			Gender: //these are supposed to be global vars created in main
			Style: //these are supposed to be global vars created in main
	        });   
	}
  });
} ());
