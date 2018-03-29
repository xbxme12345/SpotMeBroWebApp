(function () {

var sentMessage = document.getElementById("messagearea");
const submitBtn = document.getElementById("submitBtn");


var fbRef = firebase.database().ref().child("Messages").child(convo).child("MessageList");



submitBtn.addEventListener("click", e => {

  var msg = sentMessage.value;

  var d = new Date();
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var month = months[d.getMonth()];
  var day = d.getDate();



  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var md = "";


  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }


  if (h >= 12) {
    md = "PM";
    if (h >= 13){
      h = h - 12;
    }
  } else {
    md = "AM";
  }


  firebase.database().ref().child("Messages").child(convo).child("MessageList").push().set(
     // make like mobile
    msg + "-" + myname + "-" + month + " " + day + ", " + d.getFullYear() + " " +  h + ":" + m + ":" + s + " " + md
  );

  //window.location.reload();
  document.getElementById("messagearea").value = "";


});

} ());
