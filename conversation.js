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

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {

    } else {
      console.log('not logged in');
      window.location = "signin.html";
    }
  });

  firebase.auth().onAuthStateChanged(user => {
    if(user){
      var uid = user.uid;
      var availString = "";
      var name;

      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('/Users/' + userId).once('value').then(function(snapshot) {
          name = snapshot.val().Name;
  });


  fbRef.child("Messages").once('value',function(snap)
  {
    var retarr = snapshotToArray(snap);
    //console.log(retarr);
    var index;
    for (index = 0; index < retarr.length; index++)
    {
      console.log(retarr[index].key);
      //document.getElementById("pid").innerHTML += "</br><a>" + "x" + "</a></br></br>";
      var itemName = retarr[index].key; // <-- check this out
      if (itemName.includes(name))
      {

        var Names = itemName.split("-");

        /*
        if (Names[0] == name) {
        } else {
          document.getElementById("conversationSection").innerHTML += "</br><a>" + Names[0] + "</a></br></br>";
        }

        if (Names[1] == name) {
        } else {
          document.getElementById("conversationSection").innerHTML += "</br><a>" + Names[1] + "</a></br></br>";
        } */



        if (Names[0] == name) {
          document.getElementById("conversationSection").innerHTML += "</br><a href=\"messagespage.html?peeps="+itemName+"&myname=" + name + "\">" + Names[1] + "</a></br></br>";
        } else if (Names[1] == name) {
          document.getElementById("conversationSection").innerHTML += "</br><a href=\"messagespage.html?peeps="+itemName+"&myname=" + name + "\">" + Names[0] + "</a></br></br>";
        }





      }
    }
  });
  }
})
} ());
