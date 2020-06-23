// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const buttonList = document.querySelector("#btn-list");

for (let i = 1; i <= 4; i++) {
  const button = document.getElementById(`btn-${i}`);
  button.style.backgroundColor = "gold";
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

const toggleOpacity = (id, opacity) => {
  const btnElement = document.getElementById(id);
  const currentOpacity = btnElement.style.opacity;

  if (currentOpacity === opacity) {
    btnElement.style.opacity = "100";
  } else {
    btnElement.style.opacity = opacity;
  }
};

const removeJitters = () => {
  const btnElement = document.getElementById("btn-4");
  btnElement.classList.remove("jitters");
};

const clickEvent = (e) => {
  const btnId = e.target.id;
  const btnElement = document.getElementById(btnId);
  switch (btnId) {
    case "btn-1":
      toggleOpacity(btnId, "0");
      break;
    case "btn-2":
      toggleColor(btnId, "red");
      break;
    case "btn-3":
      toggleColor(btnId, "blue");
      break;
    case "btn-4":
      btnElement.classList.toggle("jitters");
      break;
    case "reset":
      toggleOpacity("btn-1", "100");
      toggleColor("btn-2", "gold");
      toggleColor("btn-3", "gold");
      removeJitters();
      break;
    default:
      break;
  }
};

buttonList.addEventListener("click", clickEvent);
