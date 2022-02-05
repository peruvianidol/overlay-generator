function selectGradient() {
  let colorPicker = document.querySelector("#sceneBgColor");
  let gradientSelect = document.querySelector("#sceneGradient");
  let scene = document.querySelector("#scene");
  scene.style.setProperty("data-bg-color", "");
  colorPicker.value = "#000000";
  scene.style.setProperty("--bg-color", "");
  scene.setAttribute("data-gradient", gradientSelect.value);
}

function selectBgColor() {
  let colorPicker = document.querySelector("#sceneBgColor");
  let gradientSelect = document.querySelector("#sceneGradient");
  let scene = document.querySelector("#scene");
  scene.setAttribute("data-gradient", "");
  gradientSelect.value = '';
  scene.style.setProperty("--bg-color", colorPicker.value);
}

function togglePadding() {
  let paddingToggle = document.querySelector("paddingToggle");
  let scene = document.querySelector("#scene");
  scene.toggleAttribute("data-show-padding");
}

function setPadding() {
  let padding = document.querySelector("input[name='padding']:checked");
  let scene = document.querySelector("#scene");
  scene.style.setProperty("--padding", padding.value);
}