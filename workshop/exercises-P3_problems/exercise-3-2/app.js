// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const buttonList = document.querySelector("#btn-list");

for (let i = 1; i <= 4; i++) {
  const button = document.getElementById(`btn-${i}`);
  button.style.backgroundColor = "gold";
  button.style.opacity = "100";
}

const toggleColor = (id, color) => {
  const btnElement = document.getElementById(id);
  const currentColor = btnElement.style.backgroundColor;

  if (currentColor === color) {
    btnElement.style.backgroundColor = "gold";
  } else {
    btnElement.style.backgroundColor = color;
  }
};

const clickEvent = (e) => {
  const btnId = e.target.id;
  const btnElement = document.getElementById(btnId);
  switch (btnId) {
    case "btn-1":
      if (btnElement.style.opacity === "100") {
        btnElement.style.opacity = "0";
      } else {
        btnElement.style.opacity = "100";
      }
      break;
    case "btn-2":
      toggleColor("btn-2", "red");
      break;
    case "btn-3":
      toggleColor("btn-3", "blue");
      break;
    case "btn-4":
      btnElement.classList.toggle("jitters");
      break;
    default:
      break;
  }
};

buttonList.addEventListener("click", clickEvent);
