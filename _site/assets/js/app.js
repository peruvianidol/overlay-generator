function selectGradient() {
  let select = document.querySelector("#sceneGradient");
  let scene = document.querySelector("#scene");
  scene.style.setProperty("data-bg-color", "");
  scene.setAttribute("data-gradient", select.value);
}

function selectBgColor() {
  let input = document.querySelector("#sceneBgColor");
  let select = document.querySelector("#sceneGradient");
  let scene = document.querySelector("#scene");
  scene.setAttribute("data-gradient", "");
  select.value = '';
  scene.style.setProperty("--bg-color", input.value);
}