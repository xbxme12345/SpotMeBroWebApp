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

      //function to get name, however its done
      var name = "Jon Tonthat";


      fbRef.child("Messages").once('value',function(snap) {
          snap.forEach(function(item)
          {
              var itemName = item.val().key; // <-- check this out 
              if (itemName.includes(name))
              {
                var Names = itemName.split("-");
                if (Names[0] == name)
                {

                }
                else
                {
                  document.getElementById("pid").innerHTML += "</br><a>" + Names[1] + "</a></br></br>";
                }
                if (Names[1] == name)
                {

                }
                else
                {
                  document.getElementById("pid").innerHTML += "</br><a>" + Names[0] + "</a></br></br>";
                }

              }


          });

      });





    }
  })


} ());
