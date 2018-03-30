(function() {

  function snapshotToArray(snapshot) {
      var returnArr = [];

      snapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;

          returnArr.push(item);
      });

      return returnArr;
  };

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
  
  firebase.auth().onAuthStateChanged(user => {

    if(user) {

      var uid = user.uid;
      var availString = "";
      var name;

      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('/Users/' + userId).once('value').then(function(snapshot) {
          name = snapshot.val().Name;
      //}); // moved this because name was undefined



      fbRef.child("Messages").on("value", function(snapshot) {

        document.getElementById("deleteConversation").innerHTML = "";

        var allConvos = snapshotToArray(snapshot);
        var allC = [];

        for (var i = 0; i < allConvos.length; i++){
          allC[i] = allConvos[i].key;
        }

        console.log(allC);
        console.log(name);

        //var str = availString.split(",");
        var len = allC.length;

        /* implement sorting algo to put in day of week order then chrono order */

        var myConvos = [];


        for (var i = 0; i < len; i++) {

          if (allC[i].includes(name)) {

            myConvos.push(allC[i]);

          }
        }


        for (var i = 0; i < myConvos.length; i++) {

            var Names = myConvos[i].split("-");

            if (Names[0] == name) {
            } else {
              document.getElementById("deleteConversation").innerHTML += "</br><a id=\"item" + i + "\" class=\"allConvosClass\" onclick=\"deleteEntry(" + i + ")\">" + Names[0] + "</a></br></br>";
              //document.getElementById("deleteConversation").innerHTML += "</br><a onclick=\"deleteEntry()\">" + Names[0] + "</a></br></br>";

            }

            if (Names[1] == name) {
            } else {
              document.getElementById("deleteConversation").innerHTML += "</br><a id=\"item" + i + "\" class=\"allConvosClass\" onclick=\"deleteEntry(" + i + ")\">"  + Names[1] + "</a></br></br>";
              //document.getElementById("deleteConversation").innerHTML += "</br><a onclick=\"deleteEntry()\">"  + Names[1] + "</a></br></br>";

            }

        }





      });








    }); // end of snap

  } // end of if (user)

}) // end of onAuthStateChanged

} ()); // end of function
