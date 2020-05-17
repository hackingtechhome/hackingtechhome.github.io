
  let ctx = document.getElementsByTagName("canvas")[0].getContext("2d")
  let gradient = ctx.createLinearGradient(50,50,100,100)
  gradient.addColorStop(0,"magenta")
  gradient.addColorStop(1,"green")
  gradient.addColorStop(0.5,"yellow")
 
  ctx.font = "30px Arial";
  ctx.fillStyle = gradient
   ctx.fillText("secret crush",50,50)
   ctx.strokeStyle = gradient
   ctx.strokeText("secret crush",50,50)
 
 function getLocate(){
   if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(showPostion,showError)
   }
   else{
     alert("Sorry But Your Browser Doesn't Support Geolocation")
   }
 }
 
 function showPostion(position){
   let latitude = position.coords.latitude
   let longitude = position.coords.longitude
 
   alert(latitude + "\n" +longitude)
 }
 
 function showError(error) {
   switch(error.code) {
     case error.PERMISSION_DENIED:
    //    alert ("User denied the request for Geolocation.")
       break;
     case error.POSITION_UNAVAILABLE:
    //    alert("Location information is unavailable.")
       break;
     case error.TIMEOUT:
    //    alert("The request to get user location timed out.")
       break;
     case error.UNKNOWN_ERROR:
    //    alert("An unknown error occurred.")
       break;
   }
 }
 window.onload = getLocate