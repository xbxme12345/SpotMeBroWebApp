// Get elements
const pObject = document.getElementById("object");

// Create reference
const uid = "bhqwX9eCr9fHXx7Ska0bzVDDMiA2";
const dbRefObject = firebase.database().ref().child("Users");



/*
  key gets you the value for that specific location
  val() gets you the object inside of where you are
*/




// Sync object changes
dbRefObject.on("value", snap => {
  var xx = snap.val();
  pObject.innerHTML += "<a href=\"google.com\">" + JSON.stringify(xx, null, 3) + "</a>";   //JSON.stringify(snap.val(), null, 3);
});




var uidArr = [];
dbRefObject.once("value", function(snapshot) {
  snapshot.forEach(function(child) {
    uidArr.push(child.key);
    //console.log(child.key + " : " + child.val());
  });
  console.log("gets uid of each User entry");
  console.log(uidArr);
});


dbRefObject.on("value", snap => {
  console.log("everything for each User entry");
  console.log(snap.val());
});



  for (var i=0; i < uidArr.length; i++){
    //pObject.innerText += JSON.stringify(snap.child(uidArr[i]).child("Email").key, null, 3);   //JSON.stringify(snap.val(), null, 3);
    console.log("it is " + uidArr[i]);
    pObject.innerText += snap.child(uidArr[i]).child("Email").key;

  }
