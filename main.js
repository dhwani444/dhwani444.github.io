// Function to create and display a user input prompt
function promptUserName() {
    const name = prompt("Enter your name:");
    const outputElement = document.getElementById("user-name");
    if (name) {
      outputElement.textContent = "Hello, " + name + "!";
    } else {
      outputElement.textContent = "No name entered.";
    }
  }
  
  // Function to enlarge image on hover
  function enlargeImage(imageElement) {
    imageElement.style.width = "200px";
    imageElement.style.height = "200px";
  }
  
  function shrinkImage(imageElement) {
    imageElement.style.width = "100px";
    imageElement.style.height = "100px";
  }
  
  // Function to create and manage navigation menu (using basic hover effects)
  function createMenu() {
    const navBar = document.getElementById("navigation");
    const menuItems = [
      { title: "Home", link: "index.html" },
      { title: "About", link: "about.html" },
      { title: "Contact", link: "contact.html" },
    ];
  
    // Create main menu items
    for (const item of menuItems) {
      const menuItem = document.createElement("li");
      menuItem.textContent = item.title;
  
      if (item.link) {
        menuItem.setAttribute("href", item.link);
      }
  
      menuItem.onmouseover = function () {
        this.classList.add("hover");
      };
      menuItem.onmouseout = function () {
        this.classList.remove("hover");
      };
  
      navBar.appendChild(menuItem);
    }
  }
  
  // Initial actions
  document.getElementById("user-name-button").onclick = promptUserName;
  const profileImage = document.getElementById("profile-image");
  profileImage.onmouseover = function () {
    enlargeImage(this);
  };
  profileImage.onmouseout = function () {
    shrinkImage(this);
  };
  
  // Create navigation menu on page load
  window.onload = createMenu;
  