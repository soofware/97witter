function addUser() {
    user_name = document.getElementById("grandma").value;
  
      localStorage.setItem("grandpa", user_name);
  
      window.location = "kwitter_room.html";
  }

