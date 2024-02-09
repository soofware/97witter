
//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyD-L_yywkzVEKFpM7IyS2lQWvki9uGvEls",
      authDomain: "wompwompwompwompwompwompwompw.firebaseapp.com",
      databaseURL: "https://wompwompwompwompwompwompwompw-default-rtdb.firebaseio.com",
      projectId: "wompwompwompwompwompwompwompw",
      storageBucket: "wompwompwompwompwompwompwompw.appspot.com",
      messagingSenderId: "955559581647",
      appId: "1:955559581647:web:4153cc15ff0483bf5fe4ba"
    };

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("grandpa");
document.getElementById("username").innerHTML = "hola, " + user_name;
console.log(user_name)

function addroom(){
      lotl = document.getElementById("axo").value;
      
      firebase.database().ref("/").child(lotl).update({
          purpose : "adding room name"
        });

      localStorage.setItem("axo", lotl);
  
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      row = "<div class='room_namme' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row
      //Final del código
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("grandpa")
      localStorage.removeItem("axo");
      window.location = "index.html"
}