function myFunction() {
    var txt;
 
    if (confirm("You wanna go back to home?")) {
      txt = "You pressed OK!";
      gotohome()
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }

  function gotohome() {
    window.open('home2.html')
  }