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


  var fbRef = firebase.database().ref();


  /*
  times = availabilities.split(",");
  for (var k = 0; k < times.length; k++)
  {
    document.write('<li' + 'value="' + times[k] +'"onclick= "goto(this)">' + 		  times[k] + '</li>');
  } */



  firebase.auth().onAuthStateChanged(user => {
    if(user){

      var uid = user.uid;
      var availString = "";



      fbRef.child("Users").child(uid).child("Availability").on("value", function(snapshot) {
        availString = snapshot.val();

        console.log(availString);

        getMatches(uid, availString);



        var str = availString.split(",");
        str.pop(); // to remove empty end entry because there is an extra comma at end
        var len = str.length;



      });


    }
  })


} ());
