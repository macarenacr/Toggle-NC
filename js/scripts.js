const toggle = document.getElementById("switch");

toggle.addEventListener("change", function() {
  if (this.checked) {
    
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url('assets/nc.jpg')";
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  } else {
     document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgb(196, 255, 199)";

    
  }
});