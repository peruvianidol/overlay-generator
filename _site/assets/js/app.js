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