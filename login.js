alert("Linked");

var config = {
    
        apiKey: "AIzaSyC8G2ObavQ5kA0pC6g0swkTx60J_3Pt0-E",
        authDomain: "crop-disease-detection-d8493.firebaseapp.com",
        databaseURL: "https://crop-disease-detection-d8493-default-rtdb.firebaseio.com",
        projectId: "crop-disease-detection-d8493",
        storageBucket: "crop-disease-detection-d8493.appspot.com",
        messagingSenderId: "582201700699",
        appId: "1:582201700699:web:0c1ab3f13809b674472a7e",
        measurementId: "G-BXKV5KNDCG"
      
  }

  firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

function sendMessage(emailid,Crop_Type,Latitude,Longitude,Nitrogen,Phosphorous,Potassium) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      emailid : emailid,
      Crop_Type: Crop_Type,
      Latitude: Latitude,
      Longitude: Longitude,
      Nitrogen: Nitrogen,
      Phosphorous: Phosphorous,
      Potassium: Potassium,
    });
  }

function huhu(){
    
    var emailid = document.getElementById("email").value;
    var Crop_Type = document.getElementById("crop").value;
    var Latitude = document.getElementById("latitude").value;
    var Longitude = document.getElementById("longitude").value;
    var Nitrogen = document.getElementById("nitrogen").value;
    var Phosphorous = document.getElementById("phosphorous").value;
    var Potassium= document.getElementById("potassium").value;
   

    if ( emailid != "" && Latitude != "" && Longitude != ""){
        alert("Registration Successful!!");
        console.log("Hello ",emailid,"!!!");
        console.log("Your registration has been successful.");
    }
    else{
        alert("Registration Unsuccessful!")
    }

   





  //send message values
  sendMessage(emailid,Crop_Type,Latitude,Longitude,Nitrogen,Phosphorous,Potassium);
  







}