
// function for asking user for name
function promptForName() {
  var userName = prompt("Please enter your name:");
  var outputElement = document.getElementById("output");
  // acknowledgement with personalized name
  outputElement.innerHTML = "Hello, " + userName + "!";
  outputElement.style.color = "black";

}

// function for changing the size of image
function toggleImageSize() {
  // setting an ID name to reference elsewhere
  var imageElement = document.getElementById("myImage");
  var enlargedWidth = 300; 
  imageElement.style.width = enlargedWidth + "px";
}

// function for creating the navigation menu
function createNavigationMenu() {
  var navItems = document.getElementsByClassName("nav-item");

  // for loop for  mouseover and mouseout as per requirements
  for (var i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener("mouseover", function () {
        // hover colour set to purple
          this.style.backgroundColor = "purple";
      });

      navItems[i].addEventListener("mouseout", function () {
          this.style.backgroundColor = "initial";
      });
  }
}

// adding event listeners to execute asking for name and image size functions
document.getElementById("nameButton").addEventListener("click", promptForName);
document.getElementById("myImage").addEventListener("click", toggleImageSize);

// calling the function
createNavigationMenu();
