(function () {
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

  var nameArr = [];

  function nameToArray() {
      var ref = firebase.database().ref('Users');
      ref.on('value', nameData, errData);
      return nameArr;
  };

  function nameData(nameData){
    var allData = nameData.val();
    var keys = Object.keys(allData);
    for(var i = 0; i < keys.length; i++){
      var k = keys[i];
      var name_val = allData[k].Name;
      nameArr.push(name_val);
    }
    for(var k = 0; k < nameArr.length; k++){
      console.log(nameArr[k]);
    }
  }

  function errData(error){
    console.log("Error: " + error);
  }
}())
