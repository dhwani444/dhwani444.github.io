function promptForName() {
  var userName = prompt("Please enter your name:");
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = "Hello, " + userName + "!";
}

function enlargeImage() {
  var imageElement = document.getElementById("myImage");
  imageElement.style.width = "100px"; 
}

function createNavigationMenu() {
  var navItems = document.getElementsByClassName("nav-item");

  for (var i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener("mouseover", function () {
          this.style.backgroundColor = "purple";
      });

      navItems[i].addEventListener("mouseout", function () {
          this.style.backgroundColor = "initial";
      });
  }
}

document.getElementById("nameButton").addEventListener("click", promptForName);
document.getElementById("myImage").addEventListener("click", enlargeImage);

createNavigationMenu();
